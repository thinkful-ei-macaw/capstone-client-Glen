import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EmployeeContext from '../EmployeeContext'
import '../Styles/LandingPage.css'

export default class LandingPage extends Component {

    static contextType = EmployeeContext

    render() {
        console.log(this.context.users.username)
        return (
            <div>

                <main id="landing-page-form">
                    <header className="header-section">
                        <div className="header-div">
                            <h1>Welcome to DataTech</h1>
                            <h2>The Employee Management App</h2>
                        </div>
                    </header>

                    <section>
                        <header>
                            <h2>Built for Managers like you</h2>
                        </header>
                    </section>
                    <section>
                        <header>
                            <h3>Create Employee Profiles</h3>
                        </header>
                        <p>Have a new hire? This app allows you to create a profile for your new employee</p>
                        <p>Simple and straightforward, as it should be.</p>
                    </section>
                    <section>
                        <header>
                            <h3>Pull up existing employees</h3>
                        </header>
                        <p>Not in the office but need to access employee records?</p>
                        <p>Pull up existing employee data in a snap!</p>
                    </section>
                    <section>
                        <header>
                            <h3>Update employee records on the go</h3>
                        </header>
                        <p>An easy to use interface allows modification of current employee profiles.</p>
                        <p>Wish to leave comments on work performance? Leadership? Or update employee data?</p>
                        <p>Make it so!</p>
                    </section>
                    <section>
                        <header>
                            <h3>Remove employee records</h3>
                        </header>
                        <p>Someone no longer working for you?</p>
                        <p>No problem! You can easily remove their info in a single click and get it handled!</p>
                    </section>

                    <section>
                        <header>
                            <h3>Log into your account</h3>
                        </header>
                        <Link to='/login'>
                            <button id="landing-login-btn" className='log_in_btn'>LogIn</button>
                        </Link>
                    </section>
                </main>


            </div>
        )
    }
}
