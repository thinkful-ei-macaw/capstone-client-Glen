import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NoteContext from '../NoteContext'

export default class CareerList extends Component {
    static contextType = NoteContext;
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <Link to='/employee_list'>
                            <button type='button'>Return to Employee Roster</button>
                        </Link>
                    </nav>
                </header>
                <ul>
                    {this.context.careers.map(data => {
                        return (
                            <li key={data.id}>
                                <p>Career Field: {data.position}</p>
                                <p>Annual Salary: {data.salary}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
