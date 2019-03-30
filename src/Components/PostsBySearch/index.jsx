import React, { PureComponent } from 'react';
import Header from '../../includes/Header';
import Footer from '../../includes/Footer';

export default class PostsBySearch extends PureComponent {
    render() {
        return (
            <div>
                <Header />
                Post By PostsBySearch
        {this.props.match.params.filter_query}
                <Footer />
            </div>
        )
    }
}
