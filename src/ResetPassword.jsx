import React, { PureComponent } from 'react';
import { Helper } from './includes/Helper';
import { toast, ToastContainer } from 'react-toastify';
import Loader from './includes/Loader';
import cookies from 'react-cookies';
import SvgBackground from './includes/SvgBackground';
var formData = {};

export default class ResetPassword extends PureComponent {
    constructor() {
        super();
        this.state = {
            loader: false,
        }
        this.getValues = this.getValues.bind(this);

    }

    getValues = e => {
        formData[e.target.name] = e.target.value;
    }

    toggleLoader = _ => this.setState({ loader: !this.state.loader });


    resetPassword = e => {
        e.preventDefault();
        this.toggleLoader();
        formData['email'] = cookies.load('email');
        if (formData.password !== formData.cpassword) {
            toast.error('Password not match');
        } else {
            Helper('POST', 'users/resetpassword', '', formData)
                .then(response => {
                    if (response.success) {
                        this.toggleLoader();
                        toast.success('Password Changed');
                        setTimeout(_ => {
                            this.props.history.push('/login');
                        }, 6000);
                    } else {
                        this.toggleLoader();
                        toast.error(response.msg);
                    }
                })
        }

    }

    render() {
        return (
            <div className="container-fluid">
                <SvgBackground />
                <ToastContainer />
                <Loader loader={this.state.loader} />
                <div className="row align-content-center justify-content-center h-100v">
                    <div className="col-md-5 col-10 card p-md-5 py-5 px-4 text-center">
                        <h3>
                            Create New Password
                        </h3>
                        <form onSubmit={this.resetPassword} className="py-4">
                            <div className="row">
                                <div className="col-12">
                                    <input type="password" name="password" className="form-control my-3 form-input" placeholder="Password" required onChange={this.getValues} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <input type="password" name="cpassword" className="form-control my-3 form-input" placeholder="Re-enter password" required onChange={this.getValues} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button type="submit" className="w-100 black-btn">
                                        Change Password
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
