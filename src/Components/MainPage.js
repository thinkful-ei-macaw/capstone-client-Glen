import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <main>
                    <nav>
                        <span>Data Tech Systems</span>
                        <Link to='/'>
                            <button type="button">Log Out</button>
                        </Link>
                    </nav>

                    <section class="welcome">
                        <h1>Welcome (Username)</h1>
                        <h2>Please select from the options below</h2>
                    </section>
                    <section>
                        <h3>View employee database</h3>
                        <Link to='/employee_list'>
                            <button type="button">View employees</button>
                        </Link>
                    </section>
                    <section>
                        <h3>Create new employee profile</h3>
                        <Link to='/create_employee'>
                            <button type="button">Create profile</button>
                        </Link>
                    </section>
                    <section>
                        <h3>Update employee profile</h3>
                        <Link to='/update_employee'>
                            <button type="button">Update profile</button>
                        </Link>
                    </section>
                    <section>
                        <h3>Delete employee profile</h3>
                        <button type="button">Delete profile</button>
                    </section>
                </main>
                <footer>DataTech for a better tommorow</footer>
            </div >
        )
    }
}
