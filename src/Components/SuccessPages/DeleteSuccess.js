import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/DeleteSuccess.css'

export default class UpdateSuccess extends Component {
    render() {
        return (
            <div>
                <main id="delete-success-main">
                    <div id="delete-success-info">
                        <h2>Employee Successfully Deleted!</h2>
                        <Link to='/main_page'>
                            <button id="return-delete-btn" type="button">Return to Main Page</button>
                        </Link>
                    </div>
                </main>
            </div>
        )
    }
}
