import React, { Component } from 'react'

export default class ValidationError extends Component {

    render() {
        if (this.props.message)
            return (
                <div className="validation-error">
                    {this.props.message}
                </div>
            )
        else return <></>;
    }
}
