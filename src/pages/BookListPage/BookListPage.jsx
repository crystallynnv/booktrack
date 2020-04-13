import React from 'react';
import './BookListPage.css';
import Book from '../../components/Book/Book';

function BookListPage(props) {
    return (
        <>
            <h3>Bookkeeping List Page</h3>
            <Book />
            {/* <div className='BookListPage-grid'>
                {props.books.map(book =>
                <Book 
                // book={book}
                // key={book._id}/>
                )}
            </div> */}
        </>
    )
}

export default BookListPage;
