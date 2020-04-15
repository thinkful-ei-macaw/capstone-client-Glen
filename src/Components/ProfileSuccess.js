import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProfileSuccess extends Component {
    render() {
        return (
            <div>
                <p>Employee Profile Has Been Created!</p>
                <Link to='/main_page'>
                    <button type="button">Return to main page</button>
                </Link>
            </div>
        )
    }
}
