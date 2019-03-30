import React, { PureComponent } from 'react';
import photo from '../../assets/img/background-login.jpg';
import Header from '../../includes/Header';
import Footer from '../../includes/Footer';

export default class Post extends PureComponent {
    render() {
        return (
            <>
                <Header />
                <div className="container post">
                    <div className="row">
                        <div className="col-12">
                            <div className="img-fluid post-img" style={{ backgroundImage: `url(${photo})` }}></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="post-title">
                                Why We Love the Charles & Ray Eames Chairs
                            </div>
                            <p>
                                Nibh etiam, libero netus curabitur ridiculus diam suscipit porttitor scelerisque dui augue dignissim
                                dapibus sollicitudin pede posuere ultricies lectus dictum. Tincidunt imperdiet nec iaculis convallis
                                blandit Gravida, sagittis augue potenti.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <h4 className="title">Post Details</h4>
                        </div>
                        <div className="col-md-6 d-flex">
                            Artist Name: <h5 className="mb-0 pl-1">Jorav</h5>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
