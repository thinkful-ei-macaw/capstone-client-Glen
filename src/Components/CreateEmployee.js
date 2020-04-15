import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CreateEmployee extends Component {
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
                                <select>
                                    <option value="Select_Career_Field">-Select Career Field-</option>
                                    <option value="Full_Stack_Developer">Full Stack Developer</option>
                                    <option value="Back_End_Developer">Back End Developer</option>
                                    <option value="Front_End_Developer">Front End Developer</option>
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
