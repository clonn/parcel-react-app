import React from "react";
const Todo = ({id, title}) => {
    return (
        <li key={id}>{title}</li>
    );
}

export default Todo;