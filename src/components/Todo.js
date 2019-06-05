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
        this.handleChecked = this.handleChecked.bind(this);
    }

    handleChecked () {
        this.setState({completed: !this.state.completed});
    }

    render() {
        const { todos } = this.state;
        return (
            <div className="todos">
                <ul>
                    {todos.map((todo) => {
                        return (
                            <div id="item" key={todo.id}>
                                <input type='checkbox' value={todo.id} onChange={this.handleChecked}></input>{todo.id}. {todo.title}
                            </div>
                        );
                    })}
                </ul>
            </div>
        );
    }
}