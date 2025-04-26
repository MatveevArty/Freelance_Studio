import config from "../../config/config";
import {CommonUtils} from "../../utils/common-utils";
import {FileUtils} from "../../utils/file-utils";
import {ValidationUtils} from "../../utils/validation-utils";
import {UrlUtils} from "../../utils/url-utils";
import {FreelancersService} from "../../services/freelancers-service";

export class FreelancersEdit {

    constructor(openNewRoute) {

        this.openNewRoute = openNewRoute;
        const id = UrlUtils.getUrlParam('id');
        if (!id) {
            return this.openNewRoute('/')
        }

        document.getElementById('updateButton').addEventListener('click', this.updateFreelancer.bind(this));
        bsCustomFileInput.init(); // Инициализация библиотеки загрузку фото для аватара фрилансера

        this.findElements();

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

    findElements() {
        this.nameInputElement = document.getElementById('nameInput');
        this.lastNameInputElement = document.getElementById('lastNameInput');
        this.emailInputElement = document.getElementById('emailInput');
        this.educationInputElement = document.getElementById('educationInput');
        this.locationInputElement = document.getElementById('locationInput');
        this.skillsInputElement = document.getElementById('skillsInput');
        this.infoInputElement = document.getElementById('infoInput');
        this.levelSelectElement = document.getElementById('levelSelect');
        this.avatarInputElement = document.getElementById('avatarInput');
    }

    async getFreelancer(id) {
        const response = await FreelancersService.getFreelancer(id);

        if (response.error) {
            alert(response.error);
            return response.redirect ? this.openNewRoute(response.redirect) : null;
        }

        this.freelancerOriginalData = response.freelancer;
        this.showFreelancer(response.freelancer);
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
                const response = await FreelancersService.updateFreelancer(this.freelancerOriginalData.id, changedData);

                if (response.error) {
                    alert(response.error);
                    return response.redirect ? this.openNewRoute(response.redirect) : null;
                }
                
                return this.openNewRoute('/freelancers/view?id=' + this.freelancerOriginalData.id);
            }
        }


    }
}