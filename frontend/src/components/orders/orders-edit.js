import {FileUtils} from "../../utils/file-utils";
import {HttpUtils} from "../../utils/http-utils";
import config from "../../config/config";
import {CommonUtils} from "../../utils/common-utils";
import {ValidationUtils} from "../../utils/validation-utils";
import {UrlUtils} from "../../utils/url-utils";

export class OrdersEdit {

    constructor(openNewRoute) {

        this.openNewRoute = openNewRoute;
        const id = UrlUtils.getUrlParam('id');
        if (!id) {
            return this.openNewRoute('/')
        }

        document.getElementById('updateButton').addEventListener('click', this.updateOrder.bind(this));

        this.scheduledDate = null;
        this.completeDate = null;
        this.deadlineDate = null;

        this.freelancerSelectElement = document.getElementById('freelancerSelect');
        this.statusSelectElement = document.getElementById('statusSelect');
        this.amountInputElement = document.getElementById('amountInput');
        this.descriptionInputElement = document.getElementById('descriptionInput');
        this.scheduledCardElement = document.getElementById('scheduled-card');
        this.completeCardElement = document.getElementById('complete-card');
        this.deadlineCardElement = document.getElementById('deadline-card');

        this.validations = [
            {element: this.amountInputElement},
            {element: this.descriptionInputElement},
        ];

        this.init(id).then();
    }

    async init(id) {

        const orderData = await this.getOrder(id);
        if (orderData && orderData.freelancer) {
            this.showOrder(orderData);
            if (orderData.freelancer) {
                await this.getFreelancers(orderData.freelancer.id);
            }
        }

    }

    async getOrder(id) {

        const result = await HttpUtils.request('/orders/' + id);
        // Проверка на наличие свойства редиректа с соответствующим действием при наличии
        if (result.redirect) {
            return this.openNewRoute(result.redirect);
        }

        if (result.error || !result.response || result.response && result.response.error) {
            console.log(result.response.message);
            return alert('Возникла ошибка при запросе заказа. Обратитесь в поддержку')
        }

        this.orderOriginalData = result.response;

        return result.response;
    }

    async getFreelancers(currentFreelancerId) {
        const result = await HttpUtils.request('/freelancers');
        // Проверка на наличие свойства редиректа с соответствующим действием при наличии
        if (result.redirect) {
            return this.openNewRoute(result.redirect);
        }

        if (result.error || !result.response || result.response && (result.response.error || !result.response.freelancers)) {
            return alert('Возникла ошибка при запросе фрилансеров. Обратитесь в поддержку')
        }

        const freelancers = result.response.freelancers;
        for (let i = 0; i < freelancers.length; i++) {
            const option = document.createElement("option");
            option.value = freelancers[i].id;
            option.innerText = freelancers[i].name + ' ' + freelancers[i].lastName;
            if (currentFreelancerId === freelancers[i].id) {
                option.selected = true;
            }
            this.freelancerSelectElement.appendChild(option);
        }

        // Initialize Select2 Elements
        $(this.freelancerSelectElement).select2({
            theme: 'bootstrap4'
        });
    }

    showOrder(order) {

        const breadCrumbsElement = document.getElementById('breadcrumbs-order');
        breadCrumbsElement.href = '/orders/view?id=' + order.id;
        breadCrumbsElement.innerText = order.number;

        // Вставка цены заказа
        this.amountInputElement.value = order.amount;
        // Вставка описании заказа
        this.descriptionInputElement.value = order.description;
        // Выбор селекта статуса заказа
        for (let i = 0; i < this.statusSelectElement.options.length; i++) {
            if (this.statusSelectElement.options[i].value === order.status) {
                this.statusSelectElement.selectedIndex = i;
            }
        }

        // Инициация календаря, без jQuery никак всё-таки
        const $calendarScheduled = $('#calendar-scheduled');
        $calendarScheduled.datetimepicker({
            // format: 'L',
            inline: true,
            locale: 'ru', // Русификация календаря
            icons: {
                time: 'far fa-clock', //  Разница версий библиотеки font-awesome, по дефолту класс fa, не far
            },
            useCurrent: false, // Отмена выбора сегодняшнего дня
            date: order.scheduledDate,
        });
        $calendarScheduled.on("change.datetimepicker",  (e) => {
            this.scheduledDate = e.date;
        });

        const $calendarComplete = $('#calendar-complete');
        $calendarComplete.datetimepicker({
            // format: 'L',
            inline: true,
            locale: 'ru', // Русификация календаря
            icons: {
                time: 'far fa-clock', //  Разница версий библиотеки font-awesome, по дефолту класс fa, не far
            },
            useCurrent: false, // Отмена выбора сегодняшнего дня
            buttons: {
                showClear: true
            },
            date: order.completeDate,
        });
        $calendarComplete.on("change.datetimepicker", (e) => {
            // Присваивание верного значения в this.completeDate
            if (e.date) { // если дата выбрана
                this.completeDate = e.date;
            } else if (this.orderOriginalData.completeDate) { // если дата не выбрана, но была выбрана ранее
                this.completeDate = false;
            } else { // если дата не выбрана и не была выбрана ранее
                this.completeDate = null;
            }
        });

        const $calendarDeadline = $('#calendar-deadline');
        $calendarDeadline.datetimepicker({
            // format: 'L',
            inline: true,
            locale: 'ru', // Русификация календаря
            icons: {
                time: 'far fa-clock', //  Разница версий библиотеки font-awesome, по дефолту класс fa, не far
            },
            useCurrent: false, // Отмена выбора сегодняшнего дня
            date: order.deadlineDate,
        });
        $calendarDeadline.on("change.datetimepicker", (e) => {
            this.deadlineDate = e.date;
        });
    }

    async updateOrder(e) {

        e.preventDefault();

        if (ValidationUtils.validateForm(this.validations)) {

            const changedData = {};
            // Проверка на изменения Суммы заказа и если да, то присвоения его в объект changedData
            if (parseInt(this.amountInputElement.value) !== parseInt(this.orderOriginalData.amount)) {
                changedData.amount = parseInt(this.amountInputElement.value);
            }
            // Проверка на изменения Описания заказа и если да, то присвоения его в объект changedData
            if (this.descriptionInputElement.value !== this.orderOriginalData.description) {
                changedData.description = this.descriptionInputElement.value;
            }
            // Проверка на изменения селекта Статуса заказа и если да, то присвоения его в объект changedData
            if (this.statusSelectElement.value !== this.orderOriginalData.status) {
                changedData.status = this.statusSelectElement.value;
            }
            // Проверка на изменения селекта Исполнителя заказа и если да, то присвоения его в объект changedData
            if (this.freelancerSelectElement.value !== this.orderOriginalData.freelancer.id) {
                changedData.freelancer = this.freelancerSelectElement.value;
            }
            // Проверка на изменения даты Выполнения заказа и если да, то присвоения его в объект changedData
            if (this.completeDate || this.completeDate === false) {
                changedData.completeDate = this.completeDate ? this.completeDate.toISOString() : null;
            }
            // Проверка на изменения даты Дедлайна заказа и если да, то присвоения его в объект changedData
            if (this.deadlineDate) {
                changedData.deadlineDate = this.deadlineDate.toISOString();
            }
            // Проверка на изменения даты Запланированного выполнения заказа и если да, то присвоения его в объект changedData
            if (this.scheduledDate) {
                changedData.scheduledDate = this.scheduledDate.toISOString();
            }

            console.log(changedData);

            if (Object.keys(changedData).length > 0) {
                const result = await HttpUtils.request('/orders/' + this.orderOriginalData.id, 'PUT', true, changedData);
                // Проверка на наличие свойства редиректа с соответствующим действием при наличии
                if (result.redirect) {
                    return this.openNewRoute(result.redirect);
                }

                if (result.error || !result.response || result.response && result.response.error) {
                    console.log(result.response.message);
                    return alert('Возникла ошибка при редактировании заказа. Обратитесь в поддержку');
                }

                return this.openNewRoute('/orders/view?id=' + this.orderOriginalData.id);
            }
        }
    }
}