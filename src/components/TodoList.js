import React from "react";
import List from './List'

function TodoList(todos) {
    return (
        <ul id = "todo"> 
        {
            Object.values(todos).map(function(todo, index){
                return <List key = {index} {...todo}/>
            })
        }
        </ul>
    )
}

export default TodoList;