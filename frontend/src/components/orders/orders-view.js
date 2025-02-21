import {HttpUtils} from "../../utils/http-utils";
import config from "../../config/config";
import {CommonUtils} from "../../utils/common-utils";

export class OrdersView {

    constructor(openNewRoute) {

        this.openNewRoute = openNewRoute;
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        if (!id) {
            return this.openNewRoute('/')
        }

        document.getElementById('edit-link').href = '/orders/edit?id=' + id;
        document.getElementById('delete-link').href = '/orders/delete?id=' + id;

        this.getOrder(id).then();
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

        this.showOrder(result.response);
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