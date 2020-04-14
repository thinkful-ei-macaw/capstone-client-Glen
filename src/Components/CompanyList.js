import React, { Component } from 'react'
import NoteContext from '../NoteContext'

export default class CompanyList extends Component {
    static contextType = NoteContext;
    render() {
        return (
            <div>
                <ul>
                    {this.context.companyArr.map(data => {
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
