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
    this.state = {
      todos: [],
      movies: [],
      isloader: true
    }
  }

  async componentDidMount() {
    const data = await api.reloadTodoDatas();
    const movies = await api.getMovieData();
    const movieList = await this.getMovieData(movies);
    this.setState({
      todos: data,
      movies: movieList,
      isloader: false
    })
    
  }

  async getMovieData(movies) {
    let movieList = [];
  
     movies.forEach(async(movie)=> {
      let data =await api.getMovieById(movie.imdbID)
      movieList.push(data);
    });
   
    return movieList;
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
                    <Route exact path="/movies"  render={() => <MovieList {...this.state}/>}/>  
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