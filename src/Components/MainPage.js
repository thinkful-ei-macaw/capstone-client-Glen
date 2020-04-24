import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Route, Redirect } from 'react-router-dom'
import TokenService from '../../src/Services/token-service'
import EmployeeContext from '../EmployeeContext';
import '../Styles/Main.css'

export default class MainPage extends Component {

    static contextType = EmployeeContext

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }


    render() {

        let displayUsers = this.context.users || [];
        let displayUser = displayUsers.find(users => users.username == users.username) || [];

        return (
            <div>
                <main id="main-page-format">
                    <nav>
                        <span>Data Tech Systems</span>
                        <button className="main-logout" type="button" onClick={this.handleLogoutClick}>Log Out</button>
                    </nav>


                    <section className="welcome">

                        <h1>Welcome {displayUser.username}</h1>
                        <h2>Please select from the options below</h2>
                    </section>
                    <section>
                        <h3>View employee database</h3>
                        <Link to='/employee_list'>
                            <button className="route-btn" type="button">View employees</button>
                        </Link>
                    </section>
                    <section>
                        <h3>Create new employee profile</h3>
                        <Link to='/create_employee'>
                            <button className="route-btn" type="button">Create profile</button>
                        </Link>
                    </section>
                    <section>
                        <h3>Update employee profile</h3>
                        <Link to='/update_search'>
                            <button className="route-btn" type="button">Update profile</button>
                        </Link>
                    </section>
                    <section>
                        <h3>Delete employee profile</h3>
                        <Link to="/delete_search/:employee_id">
                            <button className="route-btn" type="button">Delete profile</button>
                        </Link>
                    </section>
                </main>
                <footer>DataTech for a better tommorow</footer>
            </div >
        )
    }
}
