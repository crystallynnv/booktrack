import React from 'react';
import './BookListPage.css';
import Book from '../../components/Book/Book';

function BookListPage(props) {
    if(props.books.length) {

    

    return (
        <>
            <h3>Bookkeeping List Page</h3>
            <div>
                  
            <table class="ui celled table">
            <thead class="">
                <tr class="">
                    <th class="">Received by</th>
                    <th class="">Company</th>
                    <th class="">Date Received</th>
                    <th class="">Description</th>
                    <th class="">Assigned to</th>
                    <th class="">Completed</th>
                    <th class="">Update</th>
                    <th class="">Delete</th>
                </tr>
            </thead>
            <tbody class="">
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
