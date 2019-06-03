import React from 'react';
import api from '/api/base';

export default class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    async componentDidMount() {
        const todos = await api.reloadTodoDatas();
        this.setState({
            'todos': todos
        });
    }

    render() {
        const { todos } = this.state;
        return (
            <div className="todos">
                <ul>
                    {todos.map((todo) => {
                        return (
                            <div id="item" key={todo.id}>
                                <input type='checkbox' value={todo.id} checked={todo.completed}></input>{todo.id}. {todo.title}
                            </div>
                        );
                    })}
                </ul>
            </div>
        );
    }
}