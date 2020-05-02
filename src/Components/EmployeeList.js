import React, { Component } from 'react'
import EmployeeContext from '../EmployeeContext'
import api_config from '../api.config'
import { Link } from 'react-router-dom'
import '../Styles/EmployeeList.css'

export default class EmployeeList extends Component {
    static contextType = EmployeeContext

    state = {
        employeeList: [],
        filter: ''
    }

    componentDidMount = () => {
        fetch(api_config.employees)
            .then(employeeData => {
                if (!employeeData.ok) {
                    return employeeData.json().then(e => Promise.reject(e))
                }
                return employeeData.json();
            })
            .then(employeeResult => {
                this.setState({
                    employeeList: employeeResult
                })
            })
    }

    handleChange = e => {
        this.setState({
            filter: e.target.value
        })
    }


    render() {
        let employees = [];
        let currentEmployee = this.state.employeeList;
        let newEmployee = currentEmployee.filter(input => {

            const fn = input.first_name.toLowerCase();
            const ln = input.last_name.toLowerCase();

            const filter = this.state.filter.toLowerCase().trim()

            return fn.includes(filter) || ln.includes(filter)


        })

        if (this.state.employeeList && this.state.employeeList.length > 0) {
            employees = newEmployee.map(employee => {

                return (
                    <div>
                        <main className="employee-list-main">
                            <ul>
                                <li key={employee.id}>
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
                                        <button id="main-return-btn">Return to Main Page</button>
                                    </Link>
                                </li>
                            </ul>
                        </main>
                    </div>
                )

            })
        }


        return (
            <div>
                <div id="current-employee-search">
                    <h2 id="current-employee-title">Search Employee Roster</h2>
                    <input id="employee-search" type="text" onChange={this.handleChange} placeholder="Search by First or Last name" />
                </div>
                {employees}
            </div>
        )
    }
}
