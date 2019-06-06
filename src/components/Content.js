import React from 'react';


const Content = ({ todos }) => {
   return (
      <ul>{
         todos.map((todo, index) => {
            return <li key={index}>{todo.title}</li>
         })
      }</ul>
   )
}


export default Content