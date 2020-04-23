import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EmployeeContext from '../EmployeeContext'
import '../Styles/CareerList.css'

export default class CareerList extends Component {
    static contextType = EmployeeContext;

    findCareerId(careers, id) {
        return careers ? careers.find((career) => +career.id === +id) : {};
    }

    render() {
        const { careers } = this.context;
        const currentCareerId = this.props.match.params.career_id;
        const careerIdResults = this.findCareerId(careers, currentCareerId);
        return (
            <div id="career-display-form">
                <main id="career-display">
                    <header>
                        <nav>
                            <Link to='/employee_list'>
                                <button id="return-roster-btn" type='button'>Return to Employee Roster</button>
                            </Link>
                        </nav>
                    </header>
                    {careerIdResults && (
                        <ul>
                            <li><h2>Career: {careerIdResults.position}</h2></li>
                            <li><h2>Annual Salary: {careerIdResults.salary}</h2></li>
                        </ul>
                    )}
                </main>
            </div>
        );
    }
}
