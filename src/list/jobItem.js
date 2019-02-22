import React, { Component } from 'react';

class JobItem extends Component {

    onItemClick = (detail) => {
        this.props.onJobClick(detail);
    }

    render() {
        return (
            <li className="joblist" onClick={() => this.onItemClick(this.props.job)}>
                <h4 className="joblist_title">{this.props.job.title}</h4>
                <p className="joblist_company">{this.props.job.company}</p>
                <p>
                    <span className="joblist_location">{this.props.job.location}</span>
                    <span className="joblist_created">{this.props.job.created_at}</span>
                </p>
            </li>
        );
    }
}

export default JobItem;
