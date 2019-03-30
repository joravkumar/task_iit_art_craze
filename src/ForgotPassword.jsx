import React, { PureComponent } from 'react';
import { Helper } from './includes/Helper';
import { toast, ToastContainer } from 'react-toastify';
import Loader from './includes/Loader';
import cookies from 'react-cookies';
var formData = {};

export default class ForgotPassword extends PureComponent {
    constructor() {
        super();
        this.state = {
            loader: false,
            openOtp: false
        }
        this.getValues = this.getValues.bind(this);

    }

    getValues = e => {
        formData[e.target.name] = e.target.value;
    }

    toggleLoader = _ => this.setState({ loader: !this.state.loader });

    checkOtp = e => {
        e.preventDefault();
        this.toggleLoader();

        Helper('POST', 'users/checkotp', '', formData)
            .then(response => {
                if (response.success) {
                    this.toggleLoader();
                    cookies.save('email', formData.email);
                    this.props.history.push('/reset-password');
                } else {
                    this.toggleLoader();
                    toast.error(response.msg);
                }
            })
    }

    forgotPassword = e => {
        e.preventDefault();
        this.toggleLoader();

        Helper('POST', 'users/forgot', '', formData)
            .then(response => {
                if (response.success) {
                    this.toggleLoader();
                    document.getElementById('contact_form').reset();
                    this.setState({
                        openOtp: true
                    });
                } else {
                    this.toggleLoader();
                    toast.error(response.msg);
                }
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <ToastContainer />
                <Loader loader={this.state.loader} />
                <div className="row align-content-center justify-content-center h-100v">
                    <div className="col-md-5 col-10 card p-md-5 py-5 px-4 text-center">
                        <h3>
                            Create New Password
                        </h3>
                        {this.state.openOtp ?
                            <form onSubmit={e => this.checkOtp(e)} id="contact_form" className="contact_form py-4">
                                <div className="row">
                                    <div className="col-12">
                                        <input type="text" name="otp" className="form-control my-3 form-input" required onBlur={this.getValues} />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="w-100 black-btn"><span>Send OTP</span></button>
                                </div>
                            </form>
                            :
                            <form onSubmit={e => this.forgotPassword(e)} id="contact_form" className="contact_form py-4">
                                <div className="row">
                                    <div className="col-12">
                                        <input type="email" name="email" placeholder="Enter Email" className="form-control my-3 form-input" required onBlur={this.getValues} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <button type="submit" className="w-100 black-btn"><span>Submit</span></button>
                                    </div>
                                </div>
                            </form>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
