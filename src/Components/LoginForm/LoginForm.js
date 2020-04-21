import React, { Component } from 'react'
import TokenService from '../../Services/token-service'
import AuthApiService from '../../Services/auth-api-services'
import { Button, Input } from '../Utils/Utils'


export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => { }
    }

    state = { error: null }

    handleSubmitBasicAuth = ev => {
        ev.preventDefault()
        const { username, password } = ev.target

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(username.value, password.value)
        )
        username.value = ''
        password.value = ''
        this.props.onLoginSuccess()
    }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { username, password } = ev.target

        AuthApiService.postLogin({
            username: username.value,
            password: password.value,
        })
            .then(res => {
                username.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }


    render() {
        const { error } = this.state
        console.log(this.state.error)
        return (
            <div>
                <form className='LoginForm'
                    onSubmit={this.handleSubmitJwtAuth}>

                    <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>
                    <div className='username'>
                        <label htmlFor='LoginForm_username'>
                            User Name
                    </label>
                        <Input required
                            name='username'
                            id='LoginForm_username'>
                        </Input>
                    </div>
                    <div className='password'>
                        <label htmlFor='LoginForm_password'>
                            Password
                    </label>
                        <Input
                            required
                            name='password'
                            type='password'
                            id='LoginForm_password'>
                        </Input>
                    </div>
                    <Button type='submit'>
                        Login
                    </Button>
                </form>

            </div>
        )
    }
}
