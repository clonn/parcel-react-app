import React, { useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import TodoList from './containers/TodoList';
import Movies from './containers/Movies';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import api from './api/base';
import CircularProgress from '@material-ui/core/CircularProgress';
import "./css/app.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isloader, setIsloader] = useState(true);
  const [keyword, setKeyword] = useState("batman");
  const [isGet, setIsGet] = useState(false);

  useEffect(() => {
    (async()=> {
      const data = await api.reloadTodoDatas();
      try {
        const movies = await api.getMovieData(keyword);
        setTodos(data);
        setMovies(movies.Search);
        setIsGet(true);
        setIsloader(false);
      } catch (e) {
        setTodos(data);
        setIsGet(false);
        setIsloader(false);
      }
    })()
  },[keyword]);

  const getMovieByKeyWord = async(key) => {
    setMovies([]);
    setIsloader(true);
    setKeyword(key);
    setIsGet(false);
    try {
      const movies = await api.getMovieData(key);
        setMovies(movies.Search);
        setIsGet(true);
        setIsloader(false);
    } catch (e) {
      setIsloader(true);
      setKeyword('');
      setIsGet(false);
    }
  }

  return (
    <div>
        <Router>
          <Header />
          <div className="container">
            <CssBaseline />
            <Container maxWidth="md">
              {(isloader) ? (
                <CircularProgress className="loader" />
              ) : (
                  <div>
                    <Switch>
                      <Route exact path="/" render={() => <TodoList todos={todos} />} />
                      <Route exact path="/movies" render={() => <Movies search={getMovieByKeyWord} movies={movies} keyword={keyword} isGet={isGet} />} />
                    </Switch>
                  </div>
                )}
            </Container>
          </div>
        </Router>

      </div>
  )
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);