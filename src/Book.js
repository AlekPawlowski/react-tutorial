import React from 'react'

const Book = (props) => {
   const p = props;
   const clickHandler = () => {
      alert('hello World');
   }
   const clickHandlerSome = (value) => {
      alert(value);
   }
   return (
      <article>
         <img src={p.img} alt="" />
         <h1>{p.title}</h1>
         <button type="button" onClick={clickHandler}>button</button>
         <button type="button" onClick={() => clickHandlerSome(p.title)}>button</button>
      </article>
   )
};

export default Book