import {HttpUtils} from "../../utils/http-utils";
import config from "../../config/config";
import {CommonUtils} from "../../utils/common-utils";
import {FileUtils} from "../../utils/file-utils";
import {ValidationUtils} from "../../utils/validation-utils";

export class FreelancersEdit {

    constructor(openNewRoute) {

        this.openNewRoute = openNewRoute;
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        if (!id) {
            return this.openNewRoute('/')
        }

        document.getElementById('updateButton').addEventListener('click', this.updateFreelancer.bind(this));
        bsCustomFileInput.init(); // Инициализация библиотеки загрузку фото для аватара фрилансера

        this.nameInputElement = document.getElementById('nameInput');
        this.lastNameInputElement = document.getElementById('lastNameInput');
        this.emailInputElement = document.getElementById('emailInput');
        this.educationInputElement = document.getElementById('educationInput');
        this.locationInputElement = document.getElementById('locationInput');
        this.skillsInputElement = document.getElementById('skillsInput');
        this.infoInputElement = document.getElementById('infoInput');
        this.levelSelectElement = document.getElementById('levelSelect');
        this.avatarInputElement = document.getElementById('avatarInput');

        this.validations = [
            {element: this.nameInputElement},
            {element: this.lastNameInputElement},
            {element: this.educationInputElement},
            {element: this.locationInputElement},
            {element: this.skillsInputElement},
            {element: this.infoInputElement},
            {element: this.emailInputElement, options: {pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/},},
        ]

        this.getFreelancer(id).then();
    }

    async getFreelancer(id) {

        const result = await HttpUtils.request('/freelancers/' + id);
        // Проверка на наличие свойства редиректа с соответствующим действием при наличии
        if (result.redirect) {
            return this.openNewRoute(result.redirect);
        }

        if (result.error || !result.response || result.response && result.response.error) {
            console.log(result.response.message);
            return alert('Возникла ошибка при запросе фрилансера. Обратитесь в поддержку')
        }

        this.freelancerOriginalData = result.response;
        this.showFreelancer(result.response);
    }

    showFreelancer(freelancer) {

        const breadCrumbsElement = document.getElementById('breadcrumbs-freelancer');
        breadCrumbsElement.href = '/freelancers/view?id=' + freelancer.id;
        breadCrumbsElement.innerText = freelancer.name + ' ' + freelancer.lastName;

        // Вставка фотографии фрилансеры
        if (freelancer.avatar) {
            document.getElementById('avatar').src = config.host + freelancer.avatar;
        }
        // Вставка левела фрилансера
        document.getElementById('level').innerHTML = CommonUtils.getLevelHtml(freelancer.level);

        // Вставка имени и фамилии фрилансера
        this.nameInputElement.value = freelancer.name;
        // Вставка имени и фамилии фрилансера
        this.lastNameInputElement.value = freelancer.lastName;
        // Вставка почты фрилансера
        this.emailInputElement.value = freelancer.email;
        // Вставка образования фрилансера
        this.educationInputElement.value = freelancer.education;
        // Вставка локации фрилансера
        this.locationInputElement.value = freelancer.location;
        // Вставка навыков фрилансера
        this.skillsInputElement.value = freelancer.skills;
        // Вставка инфы о фрилансере
        this.infoInputElement.value = freelancer.info;
        // Выбор селекта левела фрилансера
        for (let i = 0; i < this.levelSelectElement.options.length; i++) {
             if (this.levelSelectElement.options[i].value === freelancer.level) {
                 this.levelSelectElement.selectedIndex = i;
             }
        }
    }

    async updateFreelancer(e) {

        e.preventDefault();

        if (ValidationUtils.validateForm(this.validations)) {

            const changedData = {};

            if (this.nameInputElement.value !== this.freelancerOriginalData.name) {
                changedData.name = this.nameInputElement.value;
            }
            if (this.lastNameInputElement.value !== this.freelancerOriginalData.lastName) {
                changedData.lastName = this.lastNameInputElement.value;
            }
            if (this.emailInputElement.value !== this.freelancerOriginalData.email) {
                changedData.email = this.emailInputElement.value;
            }
            if (this.educationInputElement.value !== this.freelancerOriginalData.education) {
                changedData.education = this.educationInputElement.value;
            }
            if (this.locationInputElement.value !== this.freelancerOriginalData.location) {
                changedData.location = this.locationInputElement.value;
            }
            if (this.skillsInputElement.value !== this.freelancerOriginalData.skills) {
                changedData.skills = this.skillsInputElement.value;
            }
            if (this.infoInputElement.value !== this.freelancerOriginalData.info) {
                changedData.info = this.infoInputElement.value;
            }
            if (this.levelSelectElement.value !== this.freelancerOriginalData.level) {
                changedData.level = this.levelSelectElement.value;
            }
            if (this.avatarInputElement.files && this.avatarInputElement.files.length > 0) {
                changedData.avatarBase64 = await FileUtils.convertFileToBase64(this.avatarInputElement.files[0]);
            }

            if (Object.keys(changedData).length > 0) {
                const result = await HttpUtils.request('/freelancers/' + this.freelancerOriginalData.id, 'PUT', true, changedData);
                // Проверка на наличие свойства редиректа с соответствующим действием при наличии
                if (result.redirect) {
                    return this.openNewRoute(result.redirect);
                }

                if (result.error || !result.response || result.response && result.response.error) {
                    console.log(result.response.message);
                    return alert('Возникла ошибка при редактировании фрилансера. Обратитесь в поддержку');
                }
                
                return this.openNewRoute('/freelancers/view?id=' + this.freelancerOriginalData.id);
            }
        }


    }
}