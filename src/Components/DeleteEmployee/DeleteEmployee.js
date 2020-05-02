import React, { Component } from 'react'
import api_config from '../../api.config'
import EmployeeContext from '../../EmployeeContext'
import { Link } from 'react-router-dom'
import '../../Styles/Delete.css'

export default class DeleteEmployee extends Component {
    state = {
        employeeList: [],
        filter: ''
    }

    //Need to execute context function before you redirect

    static contextType = EmployeeContext

    handleDeleteEmployee = (id) => {

        if (this.props.history.push('/delete_confirm'))

            fetch(`${api_config.employees}/${id}`, {
                method: 'DELETE'
            })
                .then((res) => {
                    if (!res.ok) {
                        return res.json().then(error => {
                            throw error;
                        });
                    }
                    return res
                })
                .then(() => {
                    this.context.onDeleteEmployee(id)
                    this.props.history.push('/delete_success')
                })
                .catch(error => {

                    this.setState({ error })
                })
    };

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
                        <main id="delete-search-fields">
                            <ul>
                                <li key={employee.id}>
                                    <p>First Name: {employee.first_name}</p>
                                    <p>Last Name: {employee.last_name}</p>
                                    <p>Address: {employee.address}</p>
                                    <p>City: {employee.city}</p>
                                    <p>State: {employee.state}</p>
                                    <p>Zip Code: {employee.zip_code}</p>
                                    <p>Phone: {employee.phone}</p>
                                    <button id="delete-employee-btn" onClick={() => this.handleDeleteEmployee(employee.id)}>Delete Employee</button>
                                </li>
                            </ul>
                        </main>
                    </div>
                )
            })
        }
        return (
            <div>
                <h2 id="delete-employee-title">Search Employee to Delete</h2>
                <div id="delete-employee-search" >
                    <input id="delete-search-input" type="text" className="searchBar" onChange={this.handleChange} placeholder="Search by First or Last name" />
                    <Link to="/main_page">
                        <button id="delete-return-main" type="button">Return to Main</button>
                    </Link>
                </div>
                {employees}

            </div >

        )
    }
}
