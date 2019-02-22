import React, { Component } from 'react';
import logo from '../logo.svg';
import './header.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { keyword: this.props.keyword };

        // This binding is necessary to make `this` work in the callback

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ keyword: event.target.value });
    }

    handleSubmit(event) {
        this.props.handleSearch(this.state.keyword)
        event.preventDefault();
    }

    render() {
        return (
            <header className="app-header">
                {/* <img src={logo} className="logo" alt="logo" /> */}
                <form className="search-box" action="#" onSubmit={(e) => this.handleSubmit(e)} >
                    <input type="text" placeholder="Search eg: Java, Node, Aws" value={this.state.keyword} className="app-search" onChange={this.handleChange} />
                </form>
            </header>
        );
    }
}

export default Header;
