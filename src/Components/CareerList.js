import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NoteContext from '../NoteContext'

export default class CareerList extends Component {
    static contextType = NoteContext;
    notFound = () => {
        return 'Employee not found'
    }

    state = {

        career: {}


    }

    componentDidMount() {

        this.setState({
            career: this.context.careers.find(career => career.id === this.props.match.params.career_id)
        })


    }


    // findCareerId = () => {

    //     console.log(this.context.careers)
    //     let user = this.context.careers.find(career => career.id === this.props.match.params.career_id)
    //     console.log(this.props.match.params.career_id)
    //     console.log(user)
    // }





    render() {
        // console.log(this.context.careers)
        // console.log(this.props.match.params.career_id)
        console.log(this.state.career)
        return (
            <div>
                <header>
                    <nav>
                        <Link to='/employee_list'>
                            <button type='button'>Return to Employee Roster</button>
                        </Link>
                    </nav>
                </header>
                //do a find for the career id 
                <ul>
                    {/* {this.findCareerId()} */}
                    {/* {this.context.careers.find(careerId => {
                        return (
                            <li key={careerId}>
                                <p>Career Field: {careerId.position}</p>
                                <p>Annual Salary: {careerId.salary}</p>
                            </li>
                        )
                    })} */}
                </ul>
            </div>
        )
    }
}
