import config from "../../config/config";
import {CommonUtils} from "../../utils/common-utils";
import {UrlUtils} from "../../utils/url-utils";
import {OrdersService} from "../../services/orders-service";

export class OrdersView {

    constructor(openNewRoute) {

        this.openNewRoute = openNewRoute;
        const id = UrlUtils.getUrlParam('id');
        if (!id) {
            return this.openNewRoute('/')
        }

        document.getElementById('edit-link').href = '/orders/edit?id=' + id;
        document.getElementById('delete-link').href = '/orders/delete?id=' + id;

        this.getOrder(id).then();
    }

    async getOrder(id) {
        const response = await OrdersService.getOrder(id);

        if (response.error) {
            alert(response.error);
            return response.redirect ? this.openNewRoute(response.redirect) : null;
        }

        this.showOrder(response.order);
    }

    showOrder(order) {

        // Задание соответствующего блока со статусом заказа: цвет фона, иконка и описание статуса
        const statusInfo = CommonUtils.getStatusInfo(order.status);
        document.getElementById('order-status').classList.add('bg-' + statusInfo.color);
        document.getElementById('order-status-icon').classList.add('fa-' + statusInfo.icon);
        document.getElementById('order-status-value').innerText = statusInfo.name;

        // Задание План выполнения
        if (order.scheduledDate) {
            const date = new Date(order.scheduledDate);
            document.getElementById('scheduled').innerText = date.toLocaleDateString('ru-RU');
        }
        // Задание Дата выполнения
        document.getElementById('complete').innerText = (order.completeDate) ? (new Date(order.completeDate)).toLocaleDateString('ru-RU') : 'Ещё не выполнен';
        // Задание Дедлайн
        if (order.deadlineDate) {
            const date = new Date(order.deadlineDate);
            document.getElementById('deadline').innerText = date.toLocaleDateString('ru-RU');
        }

        // Вставка фотографии фрилансеры
        if (order.freelancer.avatar) {
            document.getElementById('freelancer-avatar').src = config.host + order.freelancer.avatar;
        }

        // Вставка имени и фамилии фрилансера
        document.getElementById('freelancer-name').innerHTML = '<a href="/freelancers/view?id=' + order.freelancer.id + '">' + order.freelancer.name + ' ' + order.freelancer.lastName + '</a>';

        // Вставка номера заказа
        document.getElementById('number').innerText = order.number;

        // Вставка всей инфы заказа
        document.getElementById('description').innerText = order.description;
        document.getElementById('owner').innerText = order.owner.name + ' ' + order.owner.lastName;
        document.getElementById('amount').innerText = order.amount;
        document.getElementById('created').innerText = (order.createdAt) ? (new Date(order.createdAt)).toLocaleString('ru-RU') : '';
    }
}