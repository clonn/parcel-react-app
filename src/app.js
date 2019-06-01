import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import TodoList from './containers/TodoList';
import MovieList from './containers/MovieList';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import api from './api/base';
import CircularProgress from '@material-ui/core/CircularProgress';
import "./css/app.css";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.getMovieByKeyWord = this.getMovieByKeyWord.bind(this);
    this.state = {
      todos: [],
      movies: [],
      isloader: true,
      keyword: "batman",
      isGet: false
    }
  }

  async componentDidMount() {
    const data = await api.reloadTodoDatas();
    const movies = await api.getMovieData(this.state.keyword);
    if (movies.Response == "True") {
      this.setState({
        todos: data,
        movies: movies.Search,
        isloader: false,
        isGet: true
      })
    }   
  }


  async getMovieByKeyWord(key) {
    this.setState({
      movies: [],
      isloader: true,
      keyword: key,
      isGet: false
    })
    const movies = await api.getMovieData(key);
    if (movies.Response == "True") {
      this.setState({
        movies: movies.Search,
        isloader: false,
        isGet: true
      })
    } else {
      this.setState({
        isloader: false,
        keyword: "",
        isGet: false
      })
    }  
  }


  render() {
    return (
      <div>
        <Router>
          <Header />
          <div className="container">
            <CssBaseline />
            <Container maxWidth="md">
              {(this.state.isloader) ? (
                <CircularProgress className="loader"/>
              ) : (
                <div>
                  <Switch>
                    <Route exact path="/" render={() => <TodoList {...this.state} />}/>
                    <Route exact path="/movies"  render={() => <MovieList keyword={this.state.keyword} search={this.getMovieByKeyWord} {...this.state}/>}/>  
                  </Switch>
                </div>
              )}

              
            </Container>
          </div>
        </Router>

      </div>
    );
  }
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);