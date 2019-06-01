import React from "react";
import Movie from '../components/Movie';
import SearchBar from '../components/SearchBar';
import "../css/movie.css";


const MovieList = ({ movies, ...props }) => {
    return (
        <div>
            <SearchBar {...props}/>
            { props.isGet ? (
                <table className="movieList">
                <tbody>
                {
                    movies.map((movie, index) => {
                        return <Movie key={index} {...movie} />
                    })
                }
                </tbody>
            </table>
            ) : (
                <div className="data-not-get">查無資料....</div>
            )}
            
        </div>
    )
}

export default MovieList;