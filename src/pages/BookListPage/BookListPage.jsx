import React from 'react';
import './BookListPage.css';
import Book from '../../components/Book/Book';

function BookListPage(props) {
    if(props.books.length) {

    

    return (
        <>
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
                handleDeleteBook={props.handleDeleteBook}/>
                )}
            </tbody>
            </table>
            </div>
        </>
    )
    } else {
        return(
            <h3>No Books Listed Yet</h3>

        )
    }
}

export default BookListPage;
