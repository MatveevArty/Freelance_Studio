import {HttpUtils} from "../../utils/http-utils";
import config from "../../config/config";
import {CommonUtils} from "../../utils/common-utils";

export class FreelancersList {

    constructor(openNewRoute) {

        this.openNewRoute = openNewRoute;
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

        this.showRecords(result.response.freelancers);
    }

    showRecords(freelancers) {

        const recordsElement = document.getElementById('records');
        for (let i = 0; i < freelancers.length; i++) {
            const trElement = document.createElement('tr');
            trElement.insertCell().innerText = i + 1;
            trElement.insertCell().innerHTML = freelancers[i].avatar ?
                '<img class="freelancer-avatar" src="' + config.host + freelancers[i].avatar + '" alt="User Image">' : '';
            trElement.insertCell().innerHTML = freelancers[i].name + '<p>' + freelancers[i].lastName + '</p>';
            trElement.insertCell().innerText = freelancers[i].email;
            trElement.insertCell().innerHTML = CommonUtils.getLevelHtml(freelancers[i].level);
            trElement.insertCell().innerText = freelancers[i].education;
            trElement.insertCell().innerText = freelancers[i].location;
            trElement.insertCell().innerText = freelancers[i].skills;
            trElement.insertCell().innerHTML = CommonUtils.generateGridToolsColumn('freelancers', freelancers[i].id);

            recordsElement.appendChild(trElement);
        }

        new DataTable('#data-table', {
            language: {
                "info":           "Страница _PAGE_ из _PAGES_",
                "lengthMenu":     "Показывать _MENU_ записей на странице",
                "search":         "Фильтр:",
                "paginate": {
                    "next":       "Вперёд",
                    "previous":   "Назад"
                },
            }

        });
    }
}