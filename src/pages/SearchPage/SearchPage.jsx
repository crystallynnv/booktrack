import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Book from '../../components/Book/Book';

function SearchPage(props) {

    if(props.books.length) {

    return (
        <>
        <SearchBar 
            handleSearch={(e) => props.handleSearch(e)}
            searchedWord={props.searchedWord}/>
            <h3>Bookkeeping List Page</h3>
            <div>   
            <table className="ui celled table">
            <thead>
                <tr>
                    <th>Received by</th>
                    <th>Company</th>
                    <th>Date Received</th>
                    <th>Description</th>
                    <th>Assigned to</th>
                    <th>Completed</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.books.map(book =>
                <Book 
                book={book}
                key={book._id}
                user={props.user}
                handleDeleteBook={props.handleDeleteBook}/>
                )}
            </tbody>
            
            </table>
            </div>
        </>
    )
    } else {
        return(
            <h5>Nothing to Search yet!</h5>
        )
    }
}

export default SearchPage;

