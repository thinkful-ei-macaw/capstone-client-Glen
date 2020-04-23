import React, { Component } from 'react'
import EmployeeContext from '../EmployeeContext'
import { Link } from 'react-router-dom'
import '../Styles/EmployeeList.css'

export default class EmployeeList extends Component {
    static contextType = EmployeeContext

    render() {

        return (
            <div>
                <main className="employee-list-main">
                    <header>
                        <div className="employee-list-title">
                            <h1>Current Employee Roster</h1>
                        </div>
                    </header>
                    <ul>

                        {this.context.employees.map(employee => {
                            return (
                                <li className="employee-component" key={employee.id}>
                                    <p>First Name: {employee.first_name}</p>
                                    <p>Last Name: {employee.last_name}</p>
                                    <p>Address: {employee.address}</p>
                                    <p>City: {employee.city}</p>
                                    <p>State: {employee.state}</p>
                                    <p>Zip Code: {employee.zip_code}</p>
                                    <p>Phone: {employee.phone}</p>


                                    <Link to={`/career_list/${employee.career_id}`}>
                                        <button id="view-career-btn" type="button">View Employee Career</button>
                                    </Link>
                                    <br></br>
                                    <Link to={`/main_page`}>
                                        <button id="main-return-btn">Return to Main</button>
                                    </Link>


                                </li>

                            )
                        })}
                    </ul>
                </main>
            </div>
        )
    }
}
