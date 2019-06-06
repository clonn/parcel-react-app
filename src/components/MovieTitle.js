import React from 'react';


const Movietitle = ({ todos }) => {
   return (
      <ul>{
         todos.map((todo, index) => {
            return <li key={index}>{todo.title}</li>
         })
      }</ul>
   )
}


export default Movietitle
