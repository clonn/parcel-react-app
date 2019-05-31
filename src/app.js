import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import api from './api/base';

class HelloMessage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  async componentDidMount() {
    const searchResult = await api.getMovieInfo(this.props.name);
    this.setState({
      todos: searchResult.Search
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <div className="container">
            <h1>&quot;{this.props.name}&quot; search results from IMDB:</h1>
						<table className="movie-info">
							{todos.map((item) => {
								return (
									<tr>
										<td>
											<img src={item.Poster} />
										</td>
										<td>
											<div className="text-line">Title: {item.Title} ({item.Year})</div>
											<div className="text-line">IMDB Id: {item.imdbID}</div>
											<div className="text-line">Type: {item.Type}</div>
										</td>
									</tr>
								);
							})}
						</table>
        </div>
      </div>
    );
  }
}

const App = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Spider Man" />, App);
