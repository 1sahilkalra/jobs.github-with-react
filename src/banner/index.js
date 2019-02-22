import React, { Component } from 'react';
import bannerIcon from '../galaxy.png';

class Banner extends Component {
    render() {
        return (
            <div>
                <img src={bannerIcon} className="banner" alt="banner" />
                <p> Search Open Software Jobs Worldwide</p>
            </div>
        );
    }
}

export default Banner;
