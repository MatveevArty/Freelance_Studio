export class Login {

    constructor(openNewRoute) {

        this.openNewRoute = openNewRoute;

        // Запрет на логин и регистрацию, когда уже авторизован
        if (localStorage.getItem('accessToken')) {
            return this.openNewRoute('/');
        }

        this.emailElement = document.getElementById('email');
        this.passwordElement = document.getElementById('password');
        this.rememberMeElement = document.getElementById('remember-me');
        this.commonErrorElement = document.getElementById('common-error');
        document.getElementById('process-button').addEventListener('click', this.login.bind(this));
    }

    validateForm() {
        // Установка флага
        let isValid = true;
        // Валдиация инпута Почты
        if (this.emailElement.value && this.emailElement.value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
            this.emailElement.classList.remove('is-invalid');
        } else {
            this.emailElement.classList.add('is-invalid');
            isValid = false;
        }
        // Валдиация инпута Пароля
        if (this.passwordElement.value) {
            this.passwordElement.classList.remove('is-invalid');
        } else {
            this.passwordElement.classList.add('is-invalid');
            isValid = false;
        }
        return isValid;
    }

    async login () {
        // Скрываем сообщение об ошибке логина
        this.commonErrorElement.style.display = 'none';

        if (this.validateForm()) {
            const response = await fetch('http://localhost:3000/api/login', {
                // Отправка post-запроса для логина в соответствии с запросами, предоставленными бэкендом
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    email: this.emailElement.value,
                    password: this.passwordElement.value,
                    rememberMe: this.rememberMeElement.checked
                })
            })
            // Обработка результата запроса
            const result = await response.json();
            if (result.error || !result.accessToken || !result.refreshToken || !result.id || !result.name) {
                // Отображаем сообщение об ошибке логина
                this.commonErrorElement.style.display = 'block';
                return;
            }
            localStorage.setItem('accessToken', result.accessToken);
            localStorage.setItem('refreshToken', result.refreshToken);
            localStorage.setItem('userInfo', JSON.stringify({id: result.id, name: result.name}));
            this.openNewRoute('/')
        } else {

        }
    }
}