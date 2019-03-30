import React, { PureComponent } from 'react'
import Header from '../../includes/Header';
import Footer from '../../includes/Footer';
import BASEURL from '../../includes/BASEURL';
import { Helper } from '../../includes/Helper';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

export default class TrendingPosts extends PureComponent {

    state = {
        posts: []
    }

    componentWillMount() {
        Helper('GET', 'posts/', '', '')
            .then(response => {
                if (response.success) {
                    console.log(response);
                    this.setState({
                        posts: response.posts
                    })
                } else {
                    toast.error('Server Error');
                }

            })
    }

    render() {
        return (
            <>
                <Header />
                <div className="container-fluid content-wrapper">
                    <ToastContainer />
                    <div className="row content">
                        {this.state.posts.map(v => {
                            return (
                                <div className="col-md-4" key={v._id}>
                                    <div className="content-item">
                                        <div className="img">
                                            {v.file_type === "image" ?
                                                <img src={BASEURL + v.image} alt={v.post_name} />
                                                :
                                                <img src="http://placehold.it/1280x853" alt={v.post_name} />
                                            }
                                            <div className="overlay">
                                                <div className="title">
                                                    {v.post_name}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="content-title">
                                            {v.post_name}
                                        </p>
                                        <div className="keep-reading">
                                            {v.file_type === 'image' ?
                                                <Link to={`post/${v._id}`}>
                                                    Keep Reading
                                                <svg width="20" height="16" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.7742 0.544044C10.5562 0.318449 10.1935 0.318449 9.96786 0.544044C9.74989 0.762018 9.74989 1.1248 9.96786 1.34227L14.0565 5.43093H0.564497C0.249984 5.43144 0 5.68142 0 5.99593C0 6.31045 0.249984 6.56856 0.564497 6.56856H14.0565L9.96786 10.6496C9.74989 10.8752 9.74989 11.2385 9.96786 11.456C10.1935 11.6815 10.5567 11.6815 10.7742 11.456L15.8308 6.39936C16.0564 6.18139 16.0564 5.81861 15.8308 5.60114L10.7742 0.544044Z"
                                                            fill="#565656" />
                                                    </svg>
                                                </Link>
                                                :
                                                <Link to={`music/${v._id}`}>
                                                    Click to see Details
                                                <svg width="20" height="16" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.7742 0.544044C10.5562 0.318449 10.1935 0.318449 9.96786 0.544044C9.74989 0.762018 9.74989 1.1248 9.96786 1.34227L14.0565 5.43093H0.564497C0.249984 5.43144 0 5.68142 0 5.99593C0 6.31045 0.249984 6.56856 0.564497 6.56856H14.0565L9.96786 10.6496C9.74989 10.8752 9.74989 11.2385 9.96786 11.456C10.1935 11.6815 10.5567 11.6815 10.7742 11.456L15.8308 6.39936C16.0564 6.18139 16.0564 5.81861 15.8308 5.60114L10.7742 0.544044Z"
                                                            fill="#565656" />
                                                    </svg>
                                                </Link>
                                            }
                                        </div>
                                        <div className="favourite-icon">
                                            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"
                                                    fill="black" />
                                            </svg>
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
