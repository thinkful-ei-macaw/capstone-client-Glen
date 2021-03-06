import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/UpdateSuccess.css'

export default class UpdateSuccess extends Component {
    render() {
        return (
            <div>
                <main id="update-success-main">
                    <div id="update-success-info">
                        <h2>Employee Successfully Updated!</h2>
                        <Link to='/main_page'>
                            <button id="update-return-main-btn" type="button">Return to Main Page</button>
                        </Link>
                    </div>
                </main>
            </div>
        )
    }
}
