import {Dashboard} from "./components/dashboard";
import {Login} from "./components/auth/login";
import {SignUp} from "./components/auth/sign-up";
import {Logout} from "./components/auth/logout";
import {FreelancersList} from "./components/freelancers/freelancers-list";
import {FileUtils} from "./utils/file-utils";
import {FreelancersView} from "./components/freelancers/freelancers-view";
import {FreelancersCreate} from "./components/freelancers/freelancers-create";
import {FreelancersEdit} from "./components/freelancers/freelancers-edit";
import {FreelancersDelete} from "./components/freelancers/freelancers-delete";
import {OrdersList} from "./components/orders/orders-list";
import {OrdersView} from "./components/orders/orders-view";

export class Router {

    constructor() {
        this.titlePageElement = document.getElementById('page-title');
        this.contentPageElement = document.getElementById('page-content');
        this.adminLteStyleElement = document.getElementById('adminlte_style');

        this.initEvents();
        this.routes = [
            {
                route: '/',
                title: 'Дашборд',
                filePathTemplate: '/templates/pages/dashboard.html',
                useLayout: '/templates/pages/layout.html',
                load: () => {
                    new Dashboard();
                }
            },
            {
                route: '/404',
                title: 'Страница не найдена',
                filePathTemplate: '/templates/pages/404.html',
                useLayout: false
            },
            {
                route: '/login',
                title: 'Авторизация',
                filePathTemplate: '/templates/pages/auth/login.html',
                useLayout: false,
                load: () => {
                    document.body.classList.add('login-page'); // Добавляем для выравнивания элементов по горизонтали
                    document.body.style.height = '100vh'; // Добавляем для выравнивания по вертикали
                    new Login(this.openNewRoute.bind(this));
                },
                unload: () => {
                    document.body.classList.remove('login-page'); // Удаляем классы при выходе со страницы
                    document.body.style.height = 'auto';
                },
                styles: ['icheck-bootstrap.min.css']
            },
            {
                route: '/sign-up',
                title: 'Регистрация',
                filePathTemplate: '/templates/pages/auth/sign-up.html',
                useLayout: false,
                load: () => {
                    document.body.classList.add('register-page'); // Добавляем для выравнивания элементов по горизонтали
                    document.body.style.height = '100vh'; // Добавляем для выравнивания по вертикали
                    new SignUp(this.openNewRoute.bind(this));
                },
                unload: () => {
                    document.body.classList.remove('register-page'); // Удаляем классы при выходе со страницы
                    document.body.style.height = 'auto';
                },
                styles: ['icheck-bootstrap.min.css']
            },
            {
                route: '/logout',
                load: () => {
                    new Logout(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/freelancers',
                title: 'Фрилансеры',
                filePathTemplate: '/templates/pages/freelancers/list.html',
                useLayout: '/templates/pages/layout.html',
                load: () => {
                    new FreelancersList(this.openNewRoute.bind(this));
                },
                styles: ['dataTables.bootstrap4.min.css'],
                scripts: ['jquery.dataTables.min.js', 'dataTables.bootstrap4.min.js']
            },
            {
                route: '/freelancers/view',
                title: 'Фрилансер',
                filePathTemplate: '/templates/pages/freelancers/view.html' ,
                useLayout: '/templates/pages/layout.html',
                load: () => {
                    new FreelancersView(this.openNewRoute.bind(this));
                },
            },
            {
                route: '/freelancers/create',
                title: 'Создание фрилансера',
                filePathTemplate: '/templates/pages/freelancers/create.html' ,
                useLayout: '/templates/pages/layout.html',
                load: () => {
                    new FreelancersCreate(this.openNewRoute.bind(this));
                },
                scripts: ['bs-custom-file-input.min.js']
            },
            {
                route: '/freelancers/edit',
                title: 'Редактирование фрилансера',
                filePathTemplate: '/templates/pages/freelancers/edit.html' ,
                useLayout: '/templates/pages/layout.html',
                load: () => {
                    new FreelancersEdit(this.openNewRoute.bind(this));
                },
                scripts: ['bs-custom-file-input.min.js']
            },
            {
                route: '/freelancers/delete',
                load: () => {
                    new FreelancersDelete(this.openNewRoute.bind(this));
                },
            },

            {
                route: '/orders',
                title: 'Заказы',
                filePathTemplate: '/templates/pages/orders/list.html',
                useLayout: '/templates/pages/layout.html',
                load: () => {
                    new OrdersList(this.openNewRoute.bind(this));
                },
                styles: ['dataTables.bootstrap4.min.css'],
                scripts: ['jquery.dataTables.min.js', 'dataTables.bootstrap4.min.js']
            },
            {
                route: '/orders/view',
                title: 'Заказ',
                filePathTemplate: '/templates/pages/orders/view.html' ,
                useLayout: '/templates/pages/layout.html',
                load: () => {
                    new OrdersView(this.openNewRoute.bind(this));
                },
            },
        ]
    }

    initEvents() {
        window.addEventListener('DOMContentLoaded', this.activateRoute.bind(this));
        window.addEventListener('popstate', this.activateRoute.bind(this));
        document.addEventListener('click', this.clickHandler.bind(this));
    }

    async openNewRoute(url) {
        const currentRoute = window.location.pathname;
        history.pushState({}, '', url);
        await this.activateRoute(null, currentRoute);
    }

    async clickHandler(e) {
        let element = null;
        if (e.target.nodeName === 'A') {
            element = e.target;
        } else if (e.target.parentNode.nodeName === 'A') {
            element = e.target.parentNode;
        }

        if (element) {
            e.preventDefault();

            const currentRoute = window.location.pathname;
            const url = element.href.replace(window.location.origin, '');
            // Второе условие отредактировано для обработки клика по кнопкам пагинации с href=# на вкладке Фрилансеры
            if (!url || (currentRoute === url.replace('#', '')) || url.startsWith('javascript:void(0)')) {
                return;
            }

            await this.openNewRoute(url);
        }
    }

    async activateRoute(e, oldRoute = null) {
        if (oldRoute) {
            const currentRoute = this.routes.find(item => item.route === oldRoute);
            // Удаление необходимых css файлов со страницы
            if (currentRoute.styles && currentRoute.styles.length > 0) {
                currentRoute.styles.forEach(style => {
                    document.querySelector(`link[href='/css/${style}']`).remove();
                });
            }
            // Удаление необходимых js файлов со страницы
            if (currentRoute.scripts && currentRoute.scripts.length > 0) {
                currentRoute.scripts.forEach(script => {
                    document.querySelector(`script[src='/js/${script}']`).remove();
                });
            }

            // Вызов функции по удалению стилей css
            if (currentRoute.unload && typeof currentRoute.unload === 'function') {
                currentRoute.unload();
            }
        }

        const urlRoute = window.location.pathname;
        const newRoute = this.routes.find(item => item.route === urlRoute);

        if (newRoute) {
            // Подключение необходимых css файлов на текущую страницу
            if (newRoute.styles && newRoute.styles.length > 0) {
                newRoute.styles.forEach(style => {
                    FileUtils.loadPageStyle('/css/' + style, this.adminLteStyleElement);
                });
            }

            // Подключение необходимых js файлов на текущую страницу
            if (newRoute.scripts && newRoute.scripts.length > 0) {

                for (const script of newRoute.scripts) {
                    await FileUtils.loadPageScript('/js/' + script);
                }
            }

            // Присвоение соответствующего заголовка страницы
            if (newRoute.title) {
                this.titlePageElement.innerText = newRoute.title + ' | FreelanceStudio';
            }

            // Присовение соответствующего контента страница
            if (newRoute.filePathTemplate) {

                let contentBlock = this.contentPageElement;

                // Присвоение html элементов лайаута при необходимости
                if (newRoute.useLayout) {
                    this.contentPageElement.innerHTML = await fetch(newRoute.useLayout).then(response => response.text());
                    contentBlock = document.getElementById('layout-content');
                    document.body.classList.add('sidebar-mini');
                    document.body.classList.add('layout-fixed');

                } else {
                    document.body.classList.remove('sidebar-mini');
                    document.body.classList.remove('layout-fixed');
                }
                contentBlock.innerHTML = await fetch(newRoute.filePathTemplate).then(response => response.text());
            }

            // Присвоение соответствующего скрипта страницы
            if (newRoute.load && typeof newRoute.load === 'function') {
                newRoute.load();
            }

        } else {
            console.log('No route found');
            history.pushState({}, '', '/404');
            await this.activateRoute();
        }
    }
}