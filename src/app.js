import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import api from './api/base';
import TodoList from './components/TodoList'
import MovieList from './components/MovieList'

class HelloMessage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      movie:[]
    };
  }

  async componentDidMount() {
    const todos = await api.reloadTodoDatas();
    const movie = await api.reloadMovieDatas();
    this.setState({
      todos,
      movie
    });
  }

  render() {
    const { todos } = this.state;
    const { movie } = this.state;
    return (
      <div>
        <Header />
        <div className="container">
          <TodoList {...todos}/>
          <MovieList {...movie.Search}/>
        </div>  
      </div>
    );
  }
}

const App = document.getElementById("app");
ReactDOM.render(<HelloMessage/>, App);