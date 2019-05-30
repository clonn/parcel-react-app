import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import Todo from './components/Todo';
import api from './api/base';



class HelloMessage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  async componentDidMount() {
    const todos = await api.reloadTodoDatas();
    this.setState({
      todos
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header/>
        <Todo todos = {todos} />
        <div className="container">
            <h1>Hi {this.props.name}</h1>
        </div>
      </div>
    );
  }
}

const App = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Liuliu" />, App);