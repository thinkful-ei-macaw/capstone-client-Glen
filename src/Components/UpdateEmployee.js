import React, { Component } from 'react'
import api_config from '../api.config'
import { Link } from 'react-router-dom'
import EmployeeContext from '../EmployeeContext'




export default class UpdateEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            address: '',
            city: '',
            state: '',
            zip_code: '',
            phone: '',
            career_id: ''
        }
    }

    getCareerId = (careerName) => {
        const currentCareer = this.context.careers.find(
            career => career.position === careerName
        )
        console.log(currentCareer.id)
        return currentCareer.id
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
        const careerId = this.getCareerId(this.state.career_id);

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




    // fetch(`${api_config.employees}/${id}`)


    static contextType = EmployeeContext


    //Always a string from match.params

    render() {
        let employees = this.context.employees || []
        let employee = employees.find(employee => {
            return employee.id === parseInt(this.props.match.params.employee_id)
        }) || { first_name: 'loading' }

        let careers = this.context.careers || []
        let career = careers.find(career => {
            return career.id === employee.career_id
        }) || {}


        console.log(this.props.match.params.employee_id)
        return (

            <div>
                <main>
                    <section class="employee-data">
                        <form onSubmit={e => this.handleSubmit(e)}>
                            <h2>Update Employee Profile</h2>
                            <div>
                                <label for="first-name">First Name</label>
                                <input type="text" id="first-name" placeholder={employee.first_name}
                                    onChange={e => this.setState({ first_name: e.target.value })}>

                                </input>
                            </div>
                            <div>
                                <label for="last-name">Last Name</label>
                                <input type="text" id="last-name" placeholder={employee.last_name}
                                    onChange={e => this.setState({ last_name: e.target.value })} />
                            </div>
                            <div>
                                <label for="address">Address</label>
                                <input type="text" id="address" placeholder={employee.address}
                                    onChange={e => this.setState({ address: e.target.value })} />
                            </div>
                            <div>
                                <label for="city">City</label>
                                <input type="text" id="city" placeholder={employee.city}
                                    onChange={e => this.setState({ city: e.target.value })} />
                            </div>
                            <div>
                                <label for="state">State</label>
                                <input type="text" id="state" placeholder={employee.state}
                                    onChange={e => this.setState({ state: e.target.value })} />
                            </div>
                            <div>
                                <label for="zipcode">ZipCode</label>
                                <input type="text" id="zipcode" placeholder={employee.zip_code}
                                    onChange={e => this.setState({ zip_code: e.target.value })} />
                            </div>
                            <div>
                                <label for="phone">Phone</label>
                                <input type="text" id="phone" placeholder={employee.phone}
                                    onChange={e => this.setState({ phone: e.target.value })} />
                            </div>
                            <div>
                                <select htmlFor="careers"
                                    onChange={e => this.setState({ career_id: e.target.value })}>
                                    <option value={career.position}>Current:{career.position}</option>
                                    {this.context.careers.map(career =>
                                        <option value={career.position} key={career.id}>
                                            {career.position}
                                        </option>)}
                                </select>
                            </div>
                            <button type="submit">Update Profile</button>
                            <Link to='/main_page'>
                                <button type="button">Return to Main Page</button>
                            </Link>
                        </form>
                    </section>

                </main>
            </div>
        )
    }
}
