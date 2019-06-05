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
          <h1>Hi {this.props.name}</h1>
          <p>BTD {this.props.birthday}</p>
          <table className="todo-table">
            {todos.map((todo) => {
              return (
                <tbody key={todo.id}>
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
ReactDOM.render(<HelloMessage name="Anny" birthday="11/22" />, App);