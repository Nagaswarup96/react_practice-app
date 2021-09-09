import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-title text-uppercase text-center pt-5">
                        <div className="display-3">

                            <h3>the requested URL<span className="text-danger"> {this.props.location.pathname}</span> was not found</h3>
                        </div>
                        <div className="img-container d-flex">
                            <img className="img-fluid" src="img/404_error_checking_FI.png" alt="404 image"></img>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


