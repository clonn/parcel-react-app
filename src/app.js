import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import Todo from './components/Todo';
import api from './api/base';
import InputSearch from "./components/InputSearch"
import Movie from "./api/movie";
import Product from "./components/Product";
import NavBar from "./components/NavBar"



class HelloMessage extends React.Component {

  constructor(props) {
    super(props);

    this.pageList = ["Movie", "Todo"];
    this.state = {
      todos: [],
      movies: [],
      showPage: "Movie",
    };

  }

  async searchKwd (kwd) {
    if (!kwd) kwd = "banana";

    this.setState({
      movies: await Movie.requestMovieInfo(kwd)
    })
  }

  setShowPage (pageName) {
    this.setState({
      showPage : pageName
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
    
    let show = ''

    switch (this.state.showPage) {
      case "Todo" :
        show =  <Todo todos = {todos} />
        break

      case "Movie" :
        show =  <div>
                <InputSearch inputKwd = {(kwd) => this.searchKwd(kwd)} />
                <Product movies = {movies} />
                </div>
        break
      
      default :
        show = <div>
                  <h1>Something Wrong...</h1>
                </div>
    }
    
    if (this.state.showPage == "todo") {
      show =  <Todo todos = {todos} />
    }
                
    return (
      <div>
        <NavBar pageList = {this.pageList} setChoose = {(pageName) => this.setShowPage(pageName)}/>       
        {/* <Header/> */}
        <div className="container">
          {show}

          <p>by {this.props.name}.</p>
        </div>
      </div>
    );
  }
}

const App = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Liuliu" />, App);