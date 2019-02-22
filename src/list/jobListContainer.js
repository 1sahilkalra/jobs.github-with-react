import React, { Component } from 'react';
import JobItem from "./jobItem";

class JobList extends Component {

    render() {
        console.log('onJobClick', this.props);

        return (
            <div id="listing">
                <ul>
                    {
                        this.props.listing.map(job => {
                            return (
                                <JobItem
                                    {...this.props}
                                    key={job.id}
                                    job={job}/>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default JobList;