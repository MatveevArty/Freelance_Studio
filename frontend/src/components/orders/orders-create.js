import {ValidationUtils} from "../../utils/validation-utils";
import {FreelancersService} from "../../services/freelancers-service";
import {OrdersService} from "../../services/orders-service";

export class OrdersCreate {

    constructor(openNewRoute) {

        this.openNewRoute = openNewRoute;
        document.getElementById('saveButton').addEventListener('click', this.saveOrder.bind(this));

        this.scheduledDate = null;
        this.completeDate = null;
        this.deadlineDate = null;

        const calendarOptions = {
            // format: 'L',
            inline: true,
            locale: 'ru', // Русификация календаря
            icons: {
                time: 'far fa-clock', //  Разница версий библиотеки font-awesome, по дефолту класс fa, не far
            },
            useCurrent: false, // Отмена выбора сегодняшнего дня
        }

        // Инициация календаря, без jQuery никак всё-таки
        const $calendarScheduled = $('#calendar-scheduled');
        $calendarScheduled.datetimepicker(calendarOptions);
        $calendarScheduled.on("change.datetimepicker",  (e) => {
            this.scheduledDate = e.date;
        });

        const $calendarDeadline = $('#calendar-deadline');
        $calendarDeadline.datetimepicker(calendarOptions);
        $calendarDeadline.on("change.datetimepicker", (e) => {
            this.deadlineDate = e.date;
        });

        const $calendarComplete = $('#calendar-complete');
        calendarOptions.buttons = {
            showClear: true
        };
        $calendarComplete.datetimepicker(calendarOptions);
        $calendarComplete.on("change.datetimepicker", (e) => {
            this.completeDate = e.date;
        });

        this.findElements();

        this.validations = [
            {element: this.amountInputElement},
            {element: this.descriptionInputElement},
            {element: this.scheduledCardElement, options: {checkProperty: () => this.scheduledDate}},
            {element: this.deadlineCardElement, options: {checkProperty: () => this.deadlineDate}},
        ];
        this.getFreelancers().then();
    }

    findElements() {
        this.freelancerSelectElement = document.getElementById('freelancerSelect');
        this.statusSelectElement = document.getElementById('statusSelect');
        this.amountInputElement = document.getElementById('amountInput');
        this.descriptionInputElement = document.getElementById('descriptionInput');
        this.scheduledCardElement = document.getElementById('scheduled-card');
        this.deadlineCardElement = document.getElementById('deadline-card');
    }

    async getFreelancers() {
        const response = await FreelancersService.getFreelancers();

        if (response.error) {
            alert(response.error);
            return response.redirect ? this.openNewRoute(response.redirect) : null;
        }

        for (let i = 0; i < response.freelancers.length; i++) {
            const option = document.createElement("option");
            option.value = response.freelancers[i].id;
            option.innerText = response.freelancers[i].name + ' ' + response.freelancers[i].lastName;
            this.freelancerSelectElement.appendChild(option);
        }

        //Initialize Select2 Elements
        $(this.freelancerSelectElement).select2({
            theme: 'bootstrap4'
        });
    }

    async saveOrder(e) {

        e.preventDefault();

        if (ValidationUtils.validateForm(this.validations)) {

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

            const response = await OrdersService.createOrder(createData);

            if (response.error) {
                alert(response.error);
                return response.redirect ? this.openNewRoute(response.redirect) : null;
            }

            return this.openNewRoute('/orders/view?id=' + response.id);
        }
    }
}