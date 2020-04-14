import React from 'react';
import './BookListPage.css';
import Book from '../../components/Book/Book';

function BookListPage(props) {
    return (
        <>
            <h3>Bookkeeping List Page</h3>
            <div>
                  
            <table class="ui celled table">
            <thead class="">
                <tr class="">
                    <th class="">Received by</th>
                    <th class="">Company</th>
                    <th class="">Date</th>
                    <th class="">Description</th>
                </tr>
            </thead>
            <tbody class="">
            <tr class="">
                <td>
                {props.books.map(book =>
                <Book 
                book={book}
                key={book._id}
                handleDeleteBook={props.handleDeleteBook}/>
                )}
                </td>
            </tr>
            </tbody>
            </table>
            </div>
        </>
    )
}

export default BookListPage;
