import {Dashboard} from "./components/dashboard";
import {Login} from "./components/login";
import {SignUp} from "./components/sign-up";

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
                filePathTemplate: '/templates/dashboard.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new Dashboard();
                }
            },
            {
                route: '/404',
                title: 'Страница не найдена',
                filePathTemplate: '/templates/404.html',
                useLayout: false
            },
            {
                route: '/login',
                title: 'Авторизация',
                filePathTemplate: '/templates/login.html',
                useLayout: false,
                load: () => {
                    document.body.classList.add('login-page'); // Добавляем для выравнивания элементов по горизонтали
                    document.body.style.height = '100vh'; // Добавляем для выравнивания по вертикали
                    new Login();
                },
                styles: ['icheck-bootstrap.min.css']
            },
            {
                route: '/sign-up',
                title: 'Регистрация',
                filePathTemplate: '/templates/sign-up.html',
                useLayout: false,
                load: () => {
                    document.body.classList.add('register-page'); // Добавляем для выравнивания элементов по горизонтали
                    document.body.style.height = '100vh'; // Добавляем для выравнивания по вертикали
                    new SignUp();
                },
                styles: ['icheck-bootstrap.min.css']
            }
        ]
    }

    initEvents() {
        window.addEventListener('DOMContentLoaded', this.activateRoute.bind(this));
        window.addEventListener('popstate', this.activateRoute.bind(this));
    }

    async activateRoute() {
        const urlRoute = window.location.pathname;
        const newRoute = this.routes.find(item => item.route === urlRoute);

        if (newRoute) {
            // Подключение необходимых css файлов на текущую страницу
            if (newRoute.styles && newRoute.styles.length > 0) {
                newRoute.styles.forEach(style => {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = '/css/' + style;
                    document.head.insertBefore(link, this.adminLteStyleElement);
                });
            }

            // Присвоение соответствующего заголовка страницы
            if (newRoute.title) {
                this.titlePageElement.innerText = newRoute.title + ' | FreelanceStudio';
            }

            // Присовение соответствующего контента страница
            if (newRoute.filePathTemplate) {

                // Очищаем все классы у боди
                document.body.className = '';

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
            window.location = '/404';
        }
    }
}