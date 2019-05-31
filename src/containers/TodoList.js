import React from "react";
import Todo from '../components/Todo';
import List from '@material-ui/core/List';
import '../css/todo.css';



const TodoList = ({ todos }) => {
    return (
        <List className="todo-list">
            {
                todos.map((todo, index) => {
                    return <Todo key={index} id={todo.id} title={todo.title} />
                })
            }
        </List>

    )
}

export default TodoList;