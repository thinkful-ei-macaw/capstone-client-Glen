import api_config from '../api.config'

const TokenService = {
    saveAuthToken(token) {
        return window.sessionStorage.setItem(api_config.API_KEY, token)
    },
    getAuthToken() {
        return window.sessionStorage.getItem(api_config.API_KEY)
    },
    clearAuthToken() {
        return window.sessionStorage.removeItem(api_config.API_KEY)
    },
    hasAuthToken() {
        return !!TokenService.getAuthToken()
    },
    makeBasicAuthToken(userName, password) {
        return window.btoa(`${userName}:${password}`)
    },
}

export default TokenService
