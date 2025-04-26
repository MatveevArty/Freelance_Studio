import config from "../../config/config";
import {CommonUtils} from "../../utils/common-utils";
import {UrlUtils} from "../../utils/url-utils";
import {FreelancersService} from "../../services/freelancers-service";

export class FreelancersView {
    constructor(openNewRoute) {

        this.openNewRoute = openNewRoute;
        const id = UrlUtils.getUrlParam('id');
        if (!id) {
            return this.openNewRoute('/')
        }

        document.getElementById('edit-link').href = '/freelancers/edit?id=' + id;
        document.getElementById('delete-link').href = '/freelancers/delete?id=' + id;

        this.getFreelancer(id).then();
    }

    async getFreelancer(id) {
        const response = await FreelancersService.getFreelancer(id);

        if (response.error) {
            alert(response.error);
            return response.redirect ? this.openNewRoute(response.redirect) : null;
        }

        this.showFreelancer(response.freelancer);
    }

    showFreelancer(freelancer) {
        // Вставка фотографии фрилансеры
        if (freelancer.avatar) {
            document.getElementById('avatar').src = config.host + freelancer.avatar;
        }
        // Вставка имени и фамилии фрилансера
        document.getElementById('name').innerText = freelancer.name + ' ' + freelancer.lastName;
        // Вставка уровня фрилансера

        // Вставка почты фрилансера
        document.getElementById('email').innerText = freelancer.email;
        // Вставка образования фрилансера
        document.getElementById('education').innerText = freelancer.education;
        // Вставка локации фрилансера
        document.getElementById('location').innerText = freelancer.location;
        // Вставка навыков фрилансера
        document.getElementById('skills').innerText = freelancer.skills;
        // Вставка инфы о фрилансере
        document.getElementById('info').innerText = freelancer.info;
        // Вставка даты создания записи о фрилансере
        if (freelancer.createdAt) {
            const date = new Date(freelancer.createdAt);
            document.getElementById('created').innerText = date.toLocaleString('ru-RU');
        }

        document.getElementById('level').innerHTML = CommonUtils.getLevelHtml(freelancer.level)
    }
}