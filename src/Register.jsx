import React, { PureComponent } from 'react';
import { Helper } from './includes/Helper';
import { toast, ToastContainer } from 'react-toastify';
import Loader from './includes/Loader';
import cookies from 'react-cookies';
import { Link } from 'react-router-dom';
import SvgBackground from './includes/SvgBackground';

var formData = {
    'gender': 'male'
};

export default class Register extends PureComponent {

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

    componentDidMount() {
        if (cookies.load('access_token') !== undefined) {
            toast.error('You are already Registered');
            setTimeout(_ => {
                this.props.history.push('/login');
            }, 6000);
        }
    }

    saveUser = e => {
        e.preventDefault();
        this.toggleLoader();
        Helper('POST', 'users/signup', '', formData)
            .then(response => {
                if (response.success) {
                    this.toggleLoader();
                    document.getElementById("contact_form").reset();
                    toast.success('You are Registered!! Now try to Login')
                } else {
                    this.toggleLoader();
                    toast.error(response.msg);
                }
            })
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
                            Registration
                        </h3>
                        <form onSubmit={this.saveUser} className="contact_form py-4">
                            <div className="row">
                                <div className="col-12">
                                    <input type="text" name="user_name" className="form-control my-3 form-input" placeholder="User name" required onChange={this.getValues} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <input type="number" name="mobile_no" className="form-control my-3 form-input" placeholder="Mobile Number" required onChange={this.getValues} />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-12 d-flex justfiy-content-start">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" checked type="checkbox" id="inlineCheckbox1" value="male" onChange={this.getValues} />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="female" onChange={this.getValues} />
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <input type="email" name="email" className="form-control my-3 form-input" placeholder="Email" required onChange={this.getValues} />
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
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="row">
                            <h6>Already Registered??? <Link to="/login">Login Here</Link></h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
