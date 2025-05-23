import {HttpUtils} from "../../utils/http-utils";
import {ValidationUtils} from "../../utils/validation-utils";
import {UrlUtils} from "../../utils/url-utils";
import {FreelancersService} from "../../services/freelancers-service";
import {OrdersService} from "../../services/orders-service";

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

        this.findElements();

        this.validations = [
            {element: this.amountInputElement},
            {element: this.descriptionInputElement},
        ];

        this.init(id).then();
    }

    findElements() {
        this.freelancerSelectElement = document.getElementById('freelancerSelect');
        this.statusSelectElement = document.getElementById('statusSelect');
        this.amountInputElement = document.getElementById('amountInput');
        this.descriptionInputElement = document.getElementById('descriptionInput');
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
        const response = await FreelancersService.getFreelancers();

        if (response.error) {
            alert(response.error);
            return response.redirect ? this.openNewRoute(response.redirect) : null;
        }

        for (let i = 0; i < response.freelancers.length; i++) {
            const option = document.createElement("option");
            option.value = response.freelancers[i].id;
            option.innerText = response.freelancers[i].name + ' ' + response.freelancers[i].lastName;
            if (currentFreelancerId === response.freelancers[i].id) {
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

        const calendarOptions = {
            // format: 'L',
            inline: true,
            locale: 'ru', // Русификация календаря
            icons: {
                time: 'far fa-clock', //  Разница версий библиотеки font-awesome, по дефолту класс fa, не far
            },
            useCurrent: false, // Отмена выбора сегодняшнего дня
            date: order.scheduledDate,
        }

        // Инициация календаря, без jQuery никак всё-таки
        const $calendarScheduled = $('#calendar-scheduled');
        $calendarScheduled.datetimepicker(Object.assign({}, calendarOptions, {date: order.scheduledDate}));
        $calendarScheduled.on("change.datetimepicker", (e) => {
            this.scheduledDate = e.date;
        });

        const $calendarDeadline = $('#calendar-deadline');
        $calendarDeadline.datetimepicker(Object.assign({}, calendarOptions, {date: order.deadlineDate}));
        $calendarDeadline.on("change.datetimepicker", (e) => {
            this.deadlineDate = e.date;
        });

        const $calendarComplete = $('#calendar-complete');
        $calendarComplete.datetimepicker(Object.assign({}, calendarOptions, {
            date: order.completeDate,
            buttons: {
                showClear: true
            }
        }));
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

                const response = await OrdersService.updateOrder(this.orderOriginalData.id, changedData);

                if (response.error) {
                    alert(response.error);
                    return response.redirect ? this.openNewRoute(response.redirect) : null;
                }

                return this.openNewRoute('/orders/view?id=' + this.orderOriginalData.id);
            }
        }
    }
}