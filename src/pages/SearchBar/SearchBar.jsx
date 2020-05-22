import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

    render() {
        return(
            <center>
            <div className="ui input">
                <input
                type="text"
                value={this.props.searchedWord}
                placeholder="Search by Company"
                onChange={(e) => this.props.handleSearch(e.target.value)}
                ></input>
            </div>
            </center>
        )
       
    }
}

export default SearchBar;