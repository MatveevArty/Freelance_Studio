import {AuthUtils} from "../../utils/auth-utils";
import {ValidationUtils} from "../../utils/validation-utils";
import {AuthService} from "../../services/auth-service";

export class SignUp {

    constructor(openNewRoute) {

        this.openNewRoute = openNewRoute;

        // Запрет на логин и регистрацию, когда уже авторизован
        if (AuthUtils.getAuthInfo(AuthUtils.accessTokenKey)) {
            return this.openNewRoute('/');
        }

        this.findElements();

        this.validations = [
            {element: this.nameElement},
            {element: this.lastNameElement},
            {element: this.emailElement, options: {pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/}},
            {element: this.passwordElement, options: {pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/}},
            {element: this.passwordRepeatElement, options: {compareTo: this.passwordElement.value}},
            {element: this.agreeElement, options: {checked: true}},
        ];

        document.getElementById('process-button').addEventListener('click', this.signUp.bind(this));
    }

    findElements() {
        this.nameElement = document.getElementById('name');
        this.lastNameElement = document.getElementById('last-name');
        this.emailElement = document.getElementById('email');
        this.passwordElement = document.getElementById('password');
        this.passwordRepeatElement = document.getElementById('password-repeat');
        this.agreeElement = document.getElementById('agree');
        this.commonErrorElement = document.getElementById('common-error');
    }

    async signUp() {
        // Скрываем сообщение об ошибке логина
        this.commonErrorElement.style.display = 'none';

        // Сравнение значения пароля с повтором пароля, которое именно на момент нажатия кнопки Зарегистрироваться
        let passwordInput = this.validations.find(item => item.element === this.passwordRepeatElement);
        passwordInput.options.compareTo = this.passwordElement.value;

        if (ValidationUtils.validateForm(this.validations)) {
            const signupResult = await AuthService.signUp({
                name: this.nameElement.value,
                lastName: this.lastNameElement.value,
                email: this.emailElement.value,
                password: this.passwordElement.value
            })

            if (signupResult) {
                AuthUtils.setAuthInfo(signupResult.accessToken, signupResult.refreshToken, {
                    id: signupResult.id,
                    name: signupResult.name
                });

                return this.openNewRoute('/')
            }

            // Отображаем сообщение об ошибке логина
            this.commonErrorElement.style.display = 'block';
        }
    }
}