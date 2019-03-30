import React, { PureComponent } from 'react'
import Sidebar from './includes/Sidebar';
import { Helper } from '../includes/Helper';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../includes/Loader';
import Navbar from './includes/Navbar';

var formData = {};

export default class ArtistPanel extends PureComponent {

    state = {
        categories: [],
        subCategories: [],
        loader: false,
        post_name: '',
        category_id: '',
        sub_category_id: '',
        price: '',
        image: ''

    }

    fetchCategory = _ => {
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
            });
    }

    fetchSubCategory = e => {
        console.log(e.target.value);
        Helper('GET', `category/${e.target.value}`, '', '')
            .then(response => {
                console.log(response);
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

    savePost = e => {
        e.preventDefault();
        var formData = new FormData();
        formData.append('post_name', this.state.post_name);
        formData.append('price', this.state.price);
        formData.append('sub_category_id', this.state.sub_category_id);
        formData.append('category_id', this.state.category_id);
        formData.append('image', this.state.image);
        Helper('FILE', "posts/addPost", '', formData)
            .then(response => {
                console.log(response);
                if (response.success) {
                    toast.success('Post Saved');
                } else {
                    console.log(response.msg);
                    toast.error('Server Error');
                }
            })
    }
    toggleLoader = _ => this.setState({ loader: !this.state.loader });
    // new FormData()
    getValues = e => {
        if (e.target.name === 'image') {
            this.setState({
                [e.target.name]: e.target.files[0]
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    componentWillMount() {
        this.fetchCategory();
    }

    render() {
        return (
            <div className='wrapper'>
                <Loader loading={this.state.loader} />
                <Sidebar />
                <ToastContainer />
                <div id="content">
                    <Navbar />
                    <div className="row ml-3">
                        <div className="col-4">
                            <form onSubmit={e => this.savePost(e)} className="py-4 admin-form">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Enter the Title of Your Post</label>
                                            <input type="text" name="post_name" className="form-control" onChange={e => this.getValues(e)} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Select the Category</label>
                                            <select className="form-control" name="category_id" onChange={e => { this.fetchSubCategory(e); this.getValues(e) }}>
                                                <option value="">Please Select</option>
                                                {this.state.categories.map(v => {
                                                    return (
                                                        <option value={v._id}>{v.category_name}</option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Select the Sub Category</label>
                                            <select className="form-control" name="sub_category_id" onChange={e => { this.getValues(e) }}>
                                                <option value="">Please Select</option>
                                                {this.state.subCategories.map(v => {
                                                    return (
                                                        <option value={v._id}>{v.sub_category_name}</option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input type="number" name="price" className="form-control" placeholder="Price" required onChange={e => this.getValues(e)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Select the Cover Image</label>
                                            <input type="file" name="image" className="form-control-file" required onChange={e => this.getValues(e)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <button type="submit" className="w-100 black-btn">
                                            Save Post
                                    </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
