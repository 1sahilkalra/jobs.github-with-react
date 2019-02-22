import React, { Component } from 'react';
import Header from './header';
import SearchList from "./list";
import JobDetail from "./detail";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      listing: [],
      isDetail: false,
      job: null,
      loading: false
    };

  }

  updateJobList = (jobs) => {
    this.setState({ listing: jobs, isDetail: false });
  }

  onJobClick = (job) => {
    this.setState({ isDetail: true, job: job});
  }

  handleHistory = () => {
    this.handleSearch(this.state.keyword);
  }

  handleLoading = (isLoading) => {
    this.setState({ loading: isLoading });
  }

  handleSearch = (keyword) => {
    this.handleLoading(true);
    let url = `https://jobs.github.com/positions.json?search=${keyword}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.updateJobList(data)
        this.handleLoading(false);
      });
  }

  render() {
    return (
      <div className="App">

        <Header keyword={this.state.keyword} handleSearch={this.handleSearch} />

        {!this.state.loading &&
          this.state.isDetail &&
            <JobDetail detail={this.state.job} navigateBackward={this.handleHistory} />
        }

        {!this.state.loading &&
          !this.state.isDetail &&
            <SearchList list={this.state.listing} onJobClick={this.onJobClick} />
        }
        {this.state.loading &&
          <div className="loader"></div>
        }
      </div>
    );
  }

}

export default App;
