import React from "react";
import Movie from '../components/Movie';
import "../css/movie.css";


const MovieList = ({ movies }) => {
    return (
        
        <table className="movieList">
            <tbody>
            {
                movies.map((movie, index) => {
                    return <Movie key={index} {...movie} />
                })
            }
            </tbody>
        </table>

    )
}

export default MovieList;