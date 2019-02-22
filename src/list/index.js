import React, { Component } from 'react';
import JobList from "./jobListContainer";
import Banner from "../banner";

class SearchList extends Component {

    render() {
        console.log('this.props.list====>', this.props.list);

        return (
            <main className="content-area">
                <Banner />
                <JobList listing={this.props.list} {...this.props} />
            </main>
        );
    }
}

export default SearchList;
