import {HttpUtils} from "../../utils/http-utils";
import {FileUtils} from "../../utils/file-utils";

export class OrdersCreate {

    constructor(openNewRoute) {

        this.openNewRoute = openNewRoute;
        document.getElementById('saveButton').addEventListener('click', this.saveOrder.bind(this));

        this.scheduledDate = null;
        this.completeDate = null;
        this.deadlineDate = null;


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
            }
        });
        $calendarComplete.on("change.datetimepicker", (e) => {
            this.completeDate = e.date;
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
        });
        $calendarDeadline.on("change.datetimepicker", (e) => {
            this.deadlineDate = e.date;
        });

        this.freelancerSelectElement = document.getElementById('freelancerSelect');
        this.statusSelectElement = document.getElementById('statusSelect');
        this.amountInputElement = document.getElementById('amountInput');
        this.descriptionInputElement = document.getElementById('descriptionInput');
        this.scheduledCardElement = document.getElementById('scheduled-card');
        this.completeCardElement = document.getElementById('complete-card');
        this.deadlineCardElement = document.getElementById('deadline-card');

        this.getFreelancers().then();
    }

    async getFreelancers() {
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
            this.freelancerSelectElement.appendChild(option);
        }

        //Initialize Select2 Elements
        $(this.freelancerSelectElement).select2({
            theme: 'bootstrap4'
        });
    }

    validateForm() {
        // Установка флага
        let isValid = true;

        // Валдиация каждого инпутов Сумма и Описание
        let textInputArray = [this.amountInputElement, this.descriptionInputElement];
        for (let i = 0; i < textInputArray.length; i++) {
            if (textInputArray[i].value) {
                textInputArray[i].classList.remove('is-invalid');
            } else {
                textInputArray[i].classList.add('is-invalid');
                isValid = false;
            }
        }

        if (this.scheduledDate) {
            this.scheduledCardElement.classList.remove('is-invalid');
        } else {
            this.scheduledCardElement.classList.add('is-invalid');
            isValid = false;
        }

        if (this.deadlineDate) {
            this.deadlineCardElement.classList.remove('is-invalid');
        } else {
            this.deadlineCardElement.classList.add('is-invalid');
            isValid = false;
        }

        return isValid;
    }

    async saveOrder(e) {

        e.preventDefault();

        if (this.validateForm()) {

            const createData = {
                description: this.descriptionInputElement.value,
                deadlineDate: this.deadlineDate.toISOString(),
                scheduledDate: this.scheduledDate.toISOString(),
                freelancer: this.freelancerSelectElement.value,
                status: this.statusSelectElement.value,
                amount: parseInt(this.amountInputElement.value),
            }

            if (this.completeDate) {
                createData.completeDate = this.completeDate.toISOString();
            }

            const result = await HttpUtils.request('/orders', 'POST', true, createData);
            // Проверка на наличие свойства редиректа с соответствующим действием при наличии
            if (result.redirect) {
                return this.openNewRoute(result.redirect);
            }

            if (result.error || !result.response || result.response && result.response.error) {
                console.log(result.response.message);
                return alert('Возникла ошибка при добавлении заказа. Обратитесь в поддержку');
            }

            return this.openNewRoute('/orders/view?id=' + result.response.id);
        }
    }
}