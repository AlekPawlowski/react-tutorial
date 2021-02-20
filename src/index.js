import React from 'react';
import ReactDOM from 'react-dom';

//import css
import './index.css';

import {books} from './books'
import Book from './Book'
import {greetings}  from './testing/test';

function BookList() {
   console.log(greetings); 
   return (
      <section className="testClass">{books.map((book) =>{
         return (
            <Book key={book.id} {...book} />
         )
      })}</section>
   );
}



ReactDOM.render(<BookList />, document.getElementById("root"))