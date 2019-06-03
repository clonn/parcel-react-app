import React from 'react'

function List(todo) {
    return (
        <li id = {todo.id}>
            <input type = 'checkbox' 
                    defaultChecked = {todo.completed}
                    key={todo.id}
                    value = {todo.id}
                    disabled
            />
            {todo.title}
        </li>
    )
}

export default List;
