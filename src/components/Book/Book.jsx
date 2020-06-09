import React from 'react';
import {Link} from 'react-router-dom';

const Book = ({book, handleDeleteBook, history}) => 
  

  
  <tr>
    <td>{book.employee}</td>
    <td>{book.company}</td>
    <td>{book.date}</td>
    <td>{book.description}</td>
    <td>{book.assigned}</td>
    <td>{book.completedDate}</td>
    <td>
      <Link
            className='btn btn-xs btn-warning'
            to={{
                    pathname: '/editBook',
                    state: {book}
            }}>Edit</Link>
    </td>
    <td><button className="ui button"
    onClick={() => handleDeleteBook(book._id)}>X</button></td>
  </tr>



 
export default Book;
