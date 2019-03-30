import React, { PureComponent } from 'react'
import Sidebar from './includes/Sidebar';
import { toast, ToastContainer } from 'react-toastify';
import { Helper } from '../includes/Helper';
import BASEURL from '../includes/BASEURL';
import { Link } from 'react-router-dom';

export default class AdminPanel extends PureComponent {

  constructor() {
    super();
    this.state = {
      categories: []
    }
  }

  componentWillMount() {
    Helper('GET', 'category', '', '')
      .then(response => {
        console.log(response);
        if (response.success) {
          this.setState({
            categories: response.categories
          })
        } else {
          console.log(response.msg);
          toast.error('Server Error');
        }
      })
  }

  render() {
    return (
      <div className='wrapper'>
        <ToastContainer />
        <Sidebar />
        <div id="content" className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button type="button" id="sidebarCollapse" className="navbar-btn">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-align-justify"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Page</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Page</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Page</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Page</a>
                </li>
              </ul>
            </div>
            {/* </div> */}
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h4 className="title">Categories</h4>
              </div>
              {this.state.categories.map(v => {
                return (
                  <div className="col-md-4" key={v._id}>
                    <div className="card">
                      <img className="card-img-top" src={BASEURL + v.image} alt="Card  cap" />
                      <div className="card-body">
                        <h5 className="card-title title">{v.category_name}</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to={`/category/${v._id}`} className="btn svg-button"><i className="fas fa-edit"></i></Link>
                        <Link to={`/category/${v._id}`} className="btn svg-button"><i className="fas fa-trash-alt"></i></Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
