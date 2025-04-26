import {AuthUtils} from "../../utils/auth-utils";
import {AuthService} from "../../services/auth-service";

export class Logout {

    constructor(openNewRoute) {

        this.openNewRoute = openNewRoute;

        // Запрет на логин и регистрацию, когда уже авторизован
        if (!AuthUtils.getAuthInfo(AuthUtils.accessTokenKey) || !AuthUtils.getAuthInfo(AuthUtils.refreshTokenKey)) {
            return this.openNewRoute('/');
        }

        this.logout().then();
    }

    async logout() {

        await AuthService.logout({
            refreshToken: AuthUtils.getAuthInfo(AuthUtils.refreshTokenKey),
        });

        AuthUtils.removeAuthInfo();
        this.openNewRoute('/login')
    }
}