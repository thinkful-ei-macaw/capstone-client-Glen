import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UpdateSuccess extends Component {
    render() {
        return (
            <div>
                <p>Employee Successfully Updated!</p>
                <Link to='/main_page'>
                    <button type="button">Return to Main Page</button>
                </Link>
            </div>
        )
    }
}
