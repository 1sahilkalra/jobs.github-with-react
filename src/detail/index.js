import React, { Component } from 'react';
import './detail.css';

// import JobList from "./jobListContainer";

class JobDetail extends Component {

    onBackBtnClick = () => {
        this.props.navigateBackward();
    }

    render() {
        console.log(this.props)
        return (
            <main className="jobdetail_container">
                <button onClick={() => this.onBackBtnClick()} className="backBtn">&#x2190; Back to job list</button>
                    <br /> <br />
                    {this.props.detail.company_logo &&
                    <img src={this.props.detail.company_logo} alt={this.props.detail.company} style={{'height': '60px'}} /> }
                    <h4 className="joblist_title">{this.props.detail.title}</h4>
                    <p className="joblist_company">{this.props.detail.company}</p>
                    <p>
                        <span className="joblist_location">{this.props.detail.location}</span>
                        <span className="joblist_created">{this.props.detail.created_at}</span>
                    </p>
                <div dangerouslySetInnerHTML={{ __html: this.props.detail.description }}></div>
                <p dangerouslySetInnerHTML={{ __html: this.props.detail.how_to_apply }}></p>
            </main>
        );
    }
}

export default JobDetail;
