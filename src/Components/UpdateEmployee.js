import React, { Component } from 'react'
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
            career_id: 'default',
            user_id: 'default',

        }
    }

    static contextType = EmployeeContext


    //Always a string from match.params

    render() {
        let employees = this.context.employees || []
        let employee = employees.find(employee => {
            return employee.id == this.props.match.params.employee_id
        }) || { first_name: 'loading' }

        console.log(employee)
        return (

            <div>
                <main>
                    <section class="employee-data">
                        <form>
                            <h2>Update Employee Profile</h2>
                            <div>
                                <label for="first-name">First Name</label>
                                <input type="text" id="first-name" value={employee.first_name} />
                            </div>
                            <div>
                                <label for="last-name">Last Name</label>
                                <input type="text" id="last-name" value={employee.last_name} />
                            </div>
                            <div>
                                <label for="address">Address</label>
                                <input type="text" id="address" value={employee.address} />
                            </div>
                            <div>
                                <label for="city">City</label>
                                <input type="text" id="city" value={employee.city} />
                            </div>
                            <div>
                                <label for="state">State</label>
                                <input type="text" id="state" value={employee.state} />
                            </div>
                            <div>
                                <label for="zipcode">ZipCode</label>
                                <input type="text" id="zipcode" value={employee.zip_code} />
                            </div>
                            <div>
                                <label for="phone">Phone</label>
                                <input type="text" id="phone" value={employee.phone} />
                            </div>
                            <div>
                                <select>
                                    <option value={employee.career_id}>Current:{employee.career_id}</option>
                                </select>
                            </div>
                            <Link to='/update_success'>
                                <button type="submit">Update Profile</button>
                            </Link>
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
