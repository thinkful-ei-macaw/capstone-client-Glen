import React, { Component } from 'react'
import EmployeeContext from '../EmployeeContext'
import ValidationError from '../Components/ValidationError/ValidationError'
import { Link } from 'react-router-dom'
import api_config from '../api.config';
import '../Styles/CreateEmployee.css'

export default class CreateEmployee extends Component {

    static contextType = EmployeeContext;

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
            career_id: 'default',
            user_id: 'default',

        }
    }

    getCareerId = (careerName) => {
        const currentCareer = this.context.careers.find(
            career => career.position === careerName
        )
        return currentCareer.id
    }

    getUserId = (userName) => {
        const currentUser = this.context.users.find(
            user => user.username === userName
        )
        return currentUser.id
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
        const userId = this.getUserId(this.state.user_id)

        const employee = {
            first_name: firstName,
            last_name: lastName,
            address: address,
            city: city,
            state: state,
            zip_code: zipCode,
            phone: phone,
            career_id: careerId,
            user_id: userId,
        };


        fetch(api_config.employees, {
            method: 'POST',
            body: JSON.stringify(employee),
            headers: {
                'content-type': 'application/json'
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
                this.context.onAddEmployee(data);
                this.props.history.push('/create_success');

            })
            .catch(error => {
                this.setState({
                    error
                })
            });

    };

    validateFirstName() {
        const firstName = this.state.first_name;
        if (firstName.length === 0) {
            return 'First name is required!'
        }
    }


    render() {
        let careers = this.context.careers || []
        let users = this.context.users || []

        return (
            <div>
                <main id="create-employee-form">
                    <section className="employee-info">
                        <h2 className="create-title">Create New Employee Profile</h2>
                        <form className="employee-input" onSubmit={e => this.handleSubmit(e)}>
                            <div className="create-employee-fields">
                                <label htmlFor="first-name">First Name</label>
                                <input type="text"
                                    name="first-name"
                                    id="first-name"
                                    onChange={e => this.setState({ first_name: e.target.value })}
                                />
                                {this.state.valid && (
                                    <ValidationError message={this.validateFirstName()} />
                                )}
                                <br />

                                <label htmlFor="last-name">Last Name</label>
                                <input type="text"
                                    id="last-name"
                                    onChange={e => this.setState({ last_name: e.target.value })} />
                                <br />

                                <label htmlFor="address">Address</label>
                                <input type="text"
                                    id="address"
                                    onChange={e => this.setState({ address: e.target.value })} />
                                <br />

                                <label htmlFor="city">City</label>
                                <input type="text"
                                    id="city"
                                    onChange={e => this.setState({ city: e.target.value })} />
                                <br />

                                <label htmlFor="state">State</label>
                                <input type="text"
                                    id="state"
                                    onChange={e => this.setState({ state: e.target.value })} />
                                <br />

                                <label htmlFor="zipcode">ZipCode</label>
                                <input type="text"
                                    id="zipcode"
                                    onChange={e => this.setState({ zip_code: e.target.value })} />
                                <br />

                                <label htmlFor="phone">Phone</label>
                                <input type="text"
                                    id="phone"
                                    onChange={e => this.setState({ phone: e.target.value })} />
                                <br />


                                <select htmlFor="careers"
                                    onChange={e => this.setState({ career_id: e.target.value })}>
                                    <option value='default'>Select a Career...</option>
                                    {careers.map(career =>
                                        <option value={career.position} key={career.id}>
                                            {career.position}
                                        </option>)}
                                </select>
                                <br />

                                <select htmlFor="users"
                                    onChange={e => this.setState({ user_id: e.target.value })}>
                                    <option value='default'>Select a Manager...</option>
                                    {users.map(user =>
                                        <option value={user.username} key={user.id}>
                                            {user.username}
                                        </option>)}
                                </select>
                                <br />
                                <input id="submit-btn" type="submit"
                                    disabled={
                                        !this.state.first_name ||
                                        !this.state.last_name ||
                                        !this.state.address ||
                                        !this.state.city ||
                                        !this.state.state ||
                                        !this.state.zip_code ||
                                        !this.state.phone ||
                                        this.state.career_id === 'default' ||
                                        this.state.user_id === 'default'
                                    } />
                                <br />
                                <Link to='/main_page'>
                                    <div id="return-main">
                                        <button id="go-back-main" type="button">Return to Main Page</button>
                                    </div>
                                </Link>
                            </div>
                        </form>
                    </section>

                </main>

            </div >
        )
    }
}
