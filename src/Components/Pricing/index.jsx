import React, { PureComponent } from 'react'
import Header from '../../includes/Header';
import Footer from '../../includes/Footer';
import { Link } from 'react-router-dom';

export default class Pricing extends PureComponent {
    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 d-flex justify-content-center">
                            <h4 className="title">Pricing</h4>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h5 className="card-title title">Starter</h5>
                                    <div className="card-text">
                                        <div className="row">
                                            <div className="col-12">
                                                10 images/mo
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="posts-by-subcategories/1233" className="btn btn-info">Buy</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                {/* <img className="card-img-top" src="" alt="Card  cap" /> */}
                                <div className="card-body text-center">
                                    <h5 className="card-title title">Value</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="posts-by-subcategories/1233" className="btn btn-info">Explore it</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                {/* <img className="card-img-top" src="" alt="Card  cap" /> */}
                                <div className="card-body text-center">
                                    <h5 className="card-title title">Pro</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="posts-by-subcategories/1233" className="btn btn-info">Explore it</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
