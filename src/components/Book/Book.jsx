import React from 'react';
import {Link} from 'react-router-dom';

const Book = ({book, handleDeleteBook}) => 
  
<table class="">
  {/* <thead class="">
    <tr class="">
      <th class="">Received by</th>
      <th class="">Company</th>
      <th class=""></th>
      <th class="">Description</th>
    </tr>
</thead>*/}
  <tbody class=""> 
  <tr class="">
    <td class="">{book.employee}</td>
    <td class="">{book.company}</td>
    <td class="">{book.date}</td>
    <td class="">{book.description}</td>
    <td class="">{book.assigned}</td>
    <td class="">{book.completedDate}</td>
    <td>
      <Link
            className='btn btn-xs btn-warning'
            to={{
                    pathname: '/editBook',
                    state: {book}
            }}>Edit</Link>
    </td>
    <td><button class="ui button"
    onClick={() => handleDeleteBook(book._id)}>X</button></td>
  </tr>

  </tbody>
  </table>



 
export default Book;
