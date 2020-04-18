import React, { Component } from 'react';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: {},
            loading: false
        }
    }
    

    handleChange(e) {
        let currentList = [];
        let newList = [];
        if (e.target.value !== "") {
            currentList = this.props.books.company;
            newList = currentList.filter(item => {
                // change current item to lowercase
            const lc = item.toLowerCase();
                // change search term to lowercase
            const filter = e.target.value.toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
            return lc.includes(filter);
            });
        } else {
            // If the search bar is empty, set newList to original task list
            newList = this.props.books.company;
        }
        // Set the filtered state based on what our rules added to newList
        this.setState({
        filtered: newList
        });
    }

    componentDidMount() {
        this.setState({
            filtered: this.props.books.company
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.books.company
        })
    }

    render() {
        return(
            <div className="ui input">
                <label></label>
                <input
                type="text"
                value=""
                placeholder="Search"
                onChange={this.handleChange}
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

export default SearchPage;