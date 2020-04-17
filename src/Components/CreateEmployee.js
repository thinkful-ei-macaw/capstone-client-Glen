import React, { Component } from 'react'
import NoteContext from '../NoteContext'
import { Link } from 'react-router-dom'

export default class CreateEmployee extends Component {


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
            career_id: '',
            user_id: ''
        }
    }

    getCareerId = (careerName) => {
        const currentCareer = this.props.careers.find(
            career => career.position === careerName
        )
        return currentCareer.id
    }

    getUserId = (userName) => {
        const currentUser = this.props.users.find(
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

        // const employee = {
        //     first
        // }
    }




    static contextType = NoteContext;

    render() {
        return (
            <div>
                <main>
                    <section class="employee-data">
                        <form>
                            <h2>Create New Employee Profile</h2>
                            <div>
                                <label for="first-name">First Name</label>
                                <input type="text" id="first-name" value="Dunder" />
                            </div>
                            <div>
                                <label for="last-name">Last Name</label>
                                <input type="text" id="last-name" value="Mifflin" />
                            </div>
                            <div>
                                <label for="address">Address</label>
                                <input type="text" id="address" value="Address: 123 someplace rd." />
                            </div>
                            <div>
                                <label for="city">City</label>
                                <input type="text" id="city" value="Las Vegas" />
                            </div>
                            <div>
                                <label for="state">State</label>
                                <input type="text" id="state" value="NV" />
                            </div>
                            <div>
                                <label for="zipcode">ZipCode</label>
                                <input type="text" id="zipcode" value="89512" />
                            </div>
                            <div>
                                <label for="phone">ZipCode</label>
                                <input type="text" id="phone" value=" 702-123-4567" />
                            </div>
                            <div>
                                <select name="careers">
                                    {this.context.careers.map(career => <option value={career.id}>{career.position}</option>)}
                                </select>
                            </div>
                            <Link to='/profile_success'>
                                <button type="submit">Create Profile</button>
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
