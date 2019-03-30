import React, { PureComponent } from 'react'
import Header from '../../includes/Header';
import Footer from '../../includes/Footer';
import { Helper } from '../../includes/Helper';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import BASEURL from '../../includes/BASEURL';

export default class SubCategories extends PureComponent {
    constructor() {
        super();
        this.state = {
            subCategories: []
        }
    }

    componentWillMount() {
        Helper('GET', `category/${this.props.match.params.category_id}`, '', '')
            .then(response => {
                // console.log(response);
                if (response.success) {
                    this.setState({
                        subCategories: response.sub_categories
                    })
                } else {
                    console.log(response.msg);
                    toast.error('Server Error');
                }
            })
    }
    render() {
        return (
            <>
                <Header />
                <ToastContainer />
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <h4 className="title">Find By Sub Categories</h4>
                        </div>
                        {this.state.subCategories.map(v => {
                            return (
                                <div className="col-md-4" key={v._id}>
                                    <div className="card">
                                        <img className="card-img-top" src={BASEURL + v.image} alt="Card  cap" />
                                        <div className="card-body">
                                            <h5 className="card-title title">{v.sub_category_name}</h5>
                                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                            <Link to={`posts-search/${v._id}`} className="btn btn-primary">Explore it</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
