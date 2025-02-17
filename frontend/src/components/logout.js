export class Logout {

    constructor(openNewRoute) {

        this.openNewRoute = openNewRoute;

        // Запрет на логаут, если ещё не авторизован
        if (!localStorage.getItem('accessToken') || !localStorage.getItem('refreshToken') ) {
            return this.openNewRoute('/login');
        }

        this.logout().then();
    }

    async logout() {

        const response = await fetch('http://localhost:3000/api/logout', {
            // Отправка post-запроса для логина в соответствии с запросами, предоставленными бэкендом
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                refreshToken: localStorage.getItem('refreshToken')
            })
        })

        const result = await response.json();
        console.log(result);

        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userInfo');

        this.openNewRoute('/login')

    }
}