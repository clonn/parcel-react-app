import React from "react";
import ReactDOM from "react-dom";
import Header from './Header';
import api from '../api/base';

class HelloMessage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  async componentDidMount() {
    const todos = await api.reloadTodoDatas();
    console.log(todos);
    this.setState({
      todos
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <Header />
        <div className="container">
          <table className="todo-table">
            {todos.map((todo) => {
              return (
                <tbody id="todoMenu" key={todo.id}>
                  <tr className="tr-list">
                    <td className="todo-id">{todo.id}</td>
                    <td className="todo-title" >{todo.title}</td>
                  </tr>
                </tbody>
              )
            })}
          </table>
        </div>
      </div>
    );
  }
}

const App = document.getElementById("app");
ReactDOM.render(<HelloMessage />, App);