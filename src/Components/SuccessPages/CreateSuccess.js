import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/CreateSuccess.css'

export default class CreateSuccess extends Component {
    render() {
        return (
            <div>
                <main id="create-success-main">
                    <div id="create-success-info">
                        <h2>Employee Profile Has Been Created!</h2>
                        <Link to='/main_page'>
                            <button id="return-main-btn" type="button">Return to main page</button>
                        </Link>
                    </div>
                </main>
            </div>
        )
    }
}
