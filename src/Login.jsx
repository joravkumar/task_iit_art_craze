import React, { PureComponent } from 'react';
import { Helper } from './includes/Helper';
import { toast, ToastContainer } from 'react-toastify';
import Loader from './includes/Loader';
import cookies from 'react-cookies';
import { Link } from 'react-router-dom';
var formData = {};

export default class Login extends PureComponent {
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


    loginUser = e => {
        e.preventDefault();
        this.toggleLoader();

        Helper('POST', 'users/login', '', formData)
            .then(response => {
                if (response.success) {
                    this.toggleLoader();
                    cookies.save('access_token', response.access_token);
                    this.props.history.push('/');
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
                            Login
                        </h3>
                        <form onSubmit={this.loginUser} className="py-4">
                            <div className="row">
                                <div className="col-12">
                                    <input type="text" name="email" className="form-control my-3 form-input" placeholder="Email" required onChange={this.getValues} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <input type="password" name="password" className="form-control my-3 form-input" placeholder="Password" required onChange={this.getValues} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button type="submit" className="w-100 black-btn">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="row">
                            <h6><Link className="svg-button" to="/forgot-password">Forgot Password</Link></h6>
                        </div>
                        <div className="row">
                            <h6>New to us??? <Link className="svg-button" to="/register">Register Here</Link></h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
