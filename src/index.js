import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Login from './Login';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import MainPage from './Components/MainPage';
import Post from './Components/Post';
import AdminPanel from './AdminPanel';
import SubCategories from './Components/SubCategories';
import Pricing from './Components/Pricing';
import ArtistPanel from './Artist';
import ArtistLogin from './Artist/ArtistLogin';
import PostsBySearch from './Components/PostsBySearch';
import TrendingPosts from './Components/TrendingPosts';
import MusicPost from './Components/MusicPost';

ReactDOM.render(
    <Router>
        <>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/category/:category_id" component={SubCategories} />
            <Route exact path="/category/posts-search/:filter_query" component={PostsBySearch} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/music/:musicId" component={MusicPost} />
            <Route exact path="/trendings" component={TrendingPosts} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route exact path="/admin" component={AdminPanel} />
            <Route exact path="/artist" component={ArtistPanel} />
            <Route exact path="/artist-login" component={ArtistLogin} />
        </>
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
