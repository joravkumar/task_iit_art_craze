import React, { PureComponent } from 'react';
import './loader.css';

export default class Loader extends PureComponent {
    render() {
        return (
            this.props.loader ?
                <section className="loader-section">
                    <div className="loader">
                        <span>Loading...</span>
                    </div>
                </section>
                :
                <div></div>
        )
    }
}
