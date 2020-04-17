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

                    {this.context.employees.map(employee => {
                        console.log(this.context.careers.id)
                        return (
                            <li key={employee.id}>
                                <p>First Name: {employee.first_name}</p>
                                <p>Last Name: {employee.last_name}</p>
                                <p>Address: {employee.address}</p>
                                <p>City: {employee.city}</p>
                                <p>State: {employee.state}</p>
                                <p>Zip Code: {employee.zip_code}</p>
                                <p>Phone: {employee.phone}</p>
                                <Link to={`/career_list/${employee.career_id}`}>
                                    <button type="button">View Career employee</button>
                                </Link>
                            </li>

                        )
                    })}
                </ul>
            </div>
        )
    }
}
