import api_config from '../api.config'

const TokenService = {
    saveAuthToken(token) {
        window.localStorage.setItem(api_config.API_KEY, token)
    },
    getAuthToken() {
        return window.localStorage.getItem(api_config.API_KEY)
    },
    clearAuthToken() {
        window.localStorage.removeItem(api_config.API_KEY)
    },
    hasAuthToken() {
        return !!TokenService.getAuthToken()
    },
    makeBasicAuthToken(userName, password) {
        return window.btoa(`${userName}:${password}`)
    },
}

export default TokenService
