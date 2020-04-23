import React, { Component } from 'react';
import api_config from '../../api.config';
import { Link } from 'react-router-dom';
import '../../Styles/UpdateSearch.css'

export default class UpdateSearch extends Component {

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
                return employeeData.json()
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


            const filter = this.state.filter.toLowerCase().trim(); //REMOVES WHITE SPACES FROM BOTH ENDS


            return fn.includes(filter) || ln.includes(filter)
        })

        if (this.state.employeeList && this.state.employeeList.length > 0) {
            employees = newEmployee.map(employee => {

                return (
                    <div>
                        <main id="update-search-fields">
                            <ul>
                                <li key={employee.id}>
                                    <p>First Name: {employee.first_name}</p>
                                    <p>Last Name: {employee.last_name}</p>
                                    <p>Address: {employee.address}</p>
                                    <p>City: {employee.city}</p>
                                    <p>State: {employee.state}</p>
                                    <p>Zip Code: {employee.zip_code}</p>
                                    <p>Phone: {employee.phone}</p>

                                    <Link to={`/update_employee/${employee.id}`}>
                                        <button id="update-employee-btn" type="button">Update Employee</button>
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
                <div id="update-employee-search">
                    <h2 id="employee-update-title">Search Employee to Update</h2>
                    <input id="employee-search-input" type="text" onChange={this.handleChange} placeholder="Search by First or Last name" />
                    <Link to="/main_page">
                        <button id="update-return-main" type="button">Return to Main</button>
                    </Link>
                </div>
                {employees}
            </div>

        )
    }
}
