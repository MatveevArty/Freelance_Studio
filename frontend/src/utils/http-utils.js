import config from "../config/config";
import {AuthUtils} from "./auth-utils";

export class HttpUtils {

    static async request(url, method = "GET", useAuth = true, body = null) {
        const result = {
            error: false,
            response: null
        }

        const params = {
            method: method,
            headers: {
                // Стандартные хэдеры при запросе
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        let token = null;

        if (useAuth) {
            token = AuthUtils.getAuthInfo(AuthUtils.accessTokenKey);
            if (token) {
                params.headers['authorization'] = token;
            }
        }

        if (body) {
            params.body = JSON.stringify(body);
        }

        let response = null;
        try {
            response = await fetch(config.api + url, params);
            result.response = await response.json();
        } catch(e) {
            result.error = true;
            return result;
        }

        if (response.status < 200 || response.status >= 300) {
            result.error = true;

            if (useAuth && response.status === 401) {
                // 1) Нет токена
                if (!token) {
                    result.redirect = '/login';
                } else {
                    // 2) Токен заэкспайрился/невалиден
                    const updateTokenResult = await AuthUtils.updateRefreshToken()
                    if (updateTokenResult) {
                        // Повторный запрос посредством рекурсии
                        return this.request(url, method, useAuth, body);
                    } else {
                        result.redirect = '/login';
                    }
                }
            }
        }

        return result;
    }
}