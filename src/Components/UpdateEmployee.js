import React, { Component } from 'react'
import api_config from '../api.config'
import { Link } from 'react-router-dom'
import EmployeeContext from '../EmployeeContext'
import '../Styles/UpdateEmployee.css'




export default class UpdateEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    handleSubmit(e) {
        e.preventDefault();
        const firstName = this.state.first_name;
        const lastName = this.state.last_name;
        const address = this.state.address;
        const city = this.state.city;
        const state = this.state.state;
        const zipCode = this.state.zip_code;
        const phone = this.state.phone;
        const careerId = this.state.career_id;

        const employee = {
            first_name: firstName,
            last_name: lastName,
            address: address,
            city: city,
            state: state,
            zip_code: zipCode,
            phone: phone,
            career_id: careerId,
        }


        fetch(`${api_config.employees}/${this.props.match.params.employee_id}`, {
            method: 'PATCH',
            body: JSON.stringify(employee),
            headers: {
                'content-type': 'application/json',
            }

        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error;
                    });
                }
                return res.json();
                //Get the server to send back the updated employee information
                //This way you can client has access to the data instead of doing another fetch call to retrieve new data
            })
            .then(data => {
                this.context.onUpdateEmployee(data)
                this.props.history.push('/update_success')

            })
            .catch(error => {
                this.setState({
                    error
                })
            })
    }





    static contextType = EmployeeContext



    render() {


        let employees = this.context.employees || []
        let employee = employees.find(employee => {
            return employee.id === parseInt(this.props.match.params.employee_id)
        }) || {}

        let careers = this.context.careers || []
        let careerInfo = careers.find(career => {
            return career.id === employee.career_id
        }) || {}

        return (

            <div>

                <main id="update-employee-form">
                    <section class="employee-data">
                        <form onSubmit={e => this.handleSubmit(e)}>
                            <h2 id="update-title">Update Employee Profile</h2>
                            <div id="update-employee-fields">
                                <label for="first-name">First Name</label>
                                <input type="text" id="first-name" defaultValue={employee.first_name}
                                    onChange={e => this.setState({ first_name: e.target.value })} />
                                <br />


                                <label for="last-name">Last Name</label>
                                <input type="text" id="last-name" defaultValue={employee.last_name}
                                    onChange={e => this.setState({ last_name: e.target.value })} />

                                <br />
                                <label for="address">Address</label>
                                <input type="text" id="address" defaultValue={employee.address}
                                    onChange={e => this.setState({ address: e.target.value })} />

                                <br />
                                <label for="city">City</label>
                                <input type="text" id="city" defaultValue={employee.city}
                                    onChange={e => this.setState({ city: e.target.value })} />

                                <br />
                                <label for="state">State</label>
                                <input type="text" id="state" defaultValue={employee.state}
                                    onChange={e => this.setState({ state: e.target.value })} />

                                <br />
                                <label for="zipcode">ZipCode</label>
                                <input type="text" id="zipcode" defaultValue={employee.zip_code}
                                    onChange={e => this.setState({ zip_code: e.target.value })} />

                                <br />
                                <label for="phone">Phone</label>
                                <input type="text" id="phone" defaultValue={employee.phone}
                                    onChange={e => this.setState({ phone: e.target.value })} />

                                <br />
                                <select htmlFor="careers"
                                    onChange={e => this.setState({ career_id: e.target.value })}>
                                    <option value="default">Select Career...</option>
                                    {careers.map(career =>
                                        careerInfo.id == career.id ? <option selected value={career.id} key={career.id}>
                                            {career.position}
                                        </option> : <option value={career.id} key={career.id}>
                                                {career.position}
                                            </option>)}
                                </select>
                                <br />

                                <input id="update-btn" type="submit"
                                    disabled={
                                        (!this.state.first_name &&
                                            !this.state.last_name &&
                                            !this.state.address &&
                                            !this.state.city &&
                                            !this.state.state &&
                                            !this.state.zip_code &&
                                            !this.state.phone &&
                                            !this.state.career_id) || this.state.career_id === 'default'

                                    } />
                                <br />
                                <Link to='/main_page'>
                                    <div id="return-to-main">
                                        <button id="go-main-btn" type="button">Return to Main Page</button>
                                    </div>
                                </Link>
                            </div>
                        </form>
                    </section>

                </main>


            </div>
        )
    }
}
