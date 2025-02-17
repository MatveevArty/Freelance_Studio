import {AuthUtils} from "../utils/auth-utils";

export class SignUp {

    constructor(openNewRoute) {

        this.openNewRoute = openNewRoute;

        // Запрет на логин и регистрацию, когда уже авторизован
        if (AuthUtils.getAuthInfo(AuthUtils.accessTokenKey)) {
            return this.openNewRoute('/');
        }

        this.nameElement = document.getElementById('name');
        this.lastNameElement = document.getElementById('last-name');
        this.emailElement = document.getElementById('email');
        this.passwordElement = document.getElementById('password');
        this.passwordRepeatElement = document.getElementById('password-repeat');
        this.agreeElement = document.getElementById('agree');
        this.commonErrorElement = document.getElementById('common-error');
        document.getElementById('process-button').addEventListener('click', this.signUp.bind(this));
    }

    validateForm() {
        // Установка флага
        let isValid = true;

        // Валдиация инпута Имени
        if (this.nameElement.value) {
            this.nameElement.classList.remove('is-invalid');
        } else {
            this.nameElement.classList.add('is-invalid');
            isValid = false;
        }
        // Валдиация инпута Фамилии
        if (this.lastNameElement.value) {
            this.lastNameElement.classList.remove('is-invalid');
        } else {
            this.lastNameElement.classList.add('is-invalid');
            isValid = false;
        }
        // Валдиация инпута Почты
        if (this.emailElement.value && this.emailElement.value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
            this.emailElement.classList.remove('is-invalid');
        } else {
            this.emailElement.classList.add('is-invalid');
            isValid = false;
        }
        // Валдиация инпута Пароля
        if (this.passwordElement.value && this.passwordElement.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
            this.passwordElement.classList.remove('is-invalid');
        } else {
            this.passwordElement.classList.add('is-invalid');
            isValid = false;
        }
        // Валдиация инпута Повтора пароля
        if (this.passwordRepeatElement.value && this.passwordRepeatElement.value === this.passwordElement.value) {
            this.passwordRepeatElement.classList.remove('is-invalid');
        } else {
            this.passwordRepeatElement.classList.add('is-invalid');
            isValid = false;
        }
        // Валдиация чекбокс-инпута Согласия с условиями
        if (this.agreeElement.checked) {
            this.agreeElement.classList.remove('is-invalid');
        } else {
            this.agreeElement.classList.add('is-invalid');
            isValid = false;
        }

        return isValid;
    }

    async signUp() {
        // Скрываем сообщение об ошибке логина
        this.commonErrorElement.style.display = 'none';

        if (this.validateForm()) {
            const response = await fetch('http://localhost:3000/api/signup', {
                // Отправка post-запроса для логина в соответствии с запросами, предоставленными бэкендом
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    name: this.nameElement.value,
                    lastName: this.lastNameElement.value,
                    email: this.emailElement.value,
                    password: this.passwordElement.value
                })
            })
            // Обработка результата запроса
            const result = await response.json();
            if (result.error || !result.accessToken || !result.refreshToken || !result.id || !result.name) {
                // Отображаем сообщение об ошибке логина
                this.commonErrorElement.style.display = 'block';
                return;
            }
            AuthUtils.removeAuthInfo();
            this.openNewRoute('/')
        } else {

        }
    }
}