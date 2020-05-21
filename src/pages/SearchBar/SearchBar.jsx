import React, { Component } from 'react';

class SearchBar extends Component {
   


    render() {
        return(
            <div className="ui input">
                <label >Company Name</label>
                <input
                type="text"
                value={this.props.searchedWord}
                placeholder="Search"
                onChange={(e) => this.props.handleSearch(e.target.value)}
                
                ></input>
                
            
                {/* <ul>
						{this.state.filtered.map(item => (
							<li key={item}>
								{item} &nbsp;
								<span
									className="delete"
									onClick={() => this.props.delete(item)}
									/>
							</li>
						))}
					</ul> */}
            </div>

            // if(this.state.filtered.length){
            //     <div>
            //     </div>
            // } else {

            // }
        )
       
    }
}

export default SearchBar;