import React, { Component } from 'react'
import api_config from '../../api.config'

export default class DeleteEmployee extends Component {
    state = {
        employeeList: [],
        filter: ''
    }


    handleDeleteEmployee = (id) => {
        fetch(`${api_config.employees}/${id}`, {
            method: 'DELETE'
        })
            .then((res) => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error;
                    });
                }
                return res.json();
            })
            .then(res => {
                res.json();
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
                    <li key={employee.id}>
                        <p>First Name: {employee.first_name}</p>
                        <p>Last Name: {employee.last_name}</p>
                        <p>Address: {employee.address}</p>
                        <p>City: {employee.city}</p>
                        <p>State: {employee.state}</p>
                        <p>Zip Code: {employee.zip_code}</p>
                        <p>Phone: {employee.phone}</p>
                        <button onClick={() => this.handleDeleteEmployee(employee.id)}>Delete</button>
                    </li>
                )
            })
        }
        return (
            <div>
                <h1>Search Employee to Delete</h1>
                <div>
                    <input type="text" className="searchBar" onChange={this.handleChange} placeholder="Search Employees" />
                </div>
                {employees}

            </div >

        )
    }
}