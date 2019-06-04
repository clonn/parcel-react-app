import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import Todo from './components/Todo';
import api from './api/base';
import InputSearch from "./components/InputSearch"
import Movie from "./api/movie";
import Product from "./components/Product";
import Product_2 from "./components/Product_2";



class HelloMessage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      movies: [],
    };

  }

  async searchKwd (kwd) {
    if (!kwd) kwd = "banana";

    this.setState({
      movies: await Movie.requestMovieInfo(kwd)
    })
  }

  async componentDidMount() {
    const todos = await api.reloadTodoDatas();
    const movies = await Movie.requestMovieInfo()
    
    this.setState({
      todos,
      movies
    });
  }

  render() {
    const { todos } = this.state
    const { movies } = this.state
    
    return (
      <div>
        <Header/>
        <InputSearch inputKwd = { (kwd) => this.searchKwd(kwd)} />
        {/* <Todo todos = {todos} /> */}
        <Product movies = {movies} />
        {/* <Product_2 movies = {movies} /> */}
        <div className="container">
            <h1>Hi {this.props.name}</h1>
        </div>
      </div>
    );
  }
}

const App = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Liuliu" />, App);