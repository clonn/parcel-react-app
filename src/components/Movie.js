import React from "react";
import ReactDOM from "react-dom";
import api from '../api/base';

class Movie extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  async componentDidMount() {
    const movieObj = await api.reloadMovieDatas();
    const movies = movieObj.Search;

    this.setState({
      movies
    });
  }

  render() {
    const { movies } = this.state;
    console.log(movies);

    return (
      <div className="movie-container">
        <table id="movieTable">

          {movies.map((movie) => {
            return (
              <tbody id="movieMenu" key={movie.Title}>
                <tr>
                  <td id="moviePicture"><img className="picture" src={movie.Poster}></img>  </td>
                  <td className="movie-row" >{movie.Title} ({movie.Year}) ({movie.Type})</td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </div>
    );
  }
}

const ShowMovie = document.getElementById("movie");
ReactDOM.render(<Movie />, ShowMovie);