import React, { Component } from 'react'
import NoteContext from '../NoteContext'
import { Link } from 'react-router-dom'
import '../Styles/EmployeeList.css'

export default class EmployeeList extends Component {
    static contextType = NoteContext

    render() {

        return (
            <div>
                <header>
                    <nav>
                        <Link to='/main_page'>
                            <button type="button">Return to Main</button>
                        </Link>
                    </nav>
                </header>
                <ul>

                    {this.context.employees.map(data => {
                        return (
                            <li key={data.id}>
                                <p>First Name: {data.first_name}</p>
                                <p>Last Name: {data.last_name}</p>
                                <p>Address: {data.address}</p>
                                <p>City: {data.city}</p>
                                <p>State: {data.state}</p>
                                <p>Zip Code: {data.zip_code}</p>
                                <p>Phone: {data.phone}</p>
                                <Link to='/career_list'>
                                    <button type="button">View Career data</button>
                                </Link>
                            </li>

                        )
                    })}
                </ul>
            </div>
        )
    }
}
