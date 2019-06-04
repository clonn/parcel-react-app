import React from "react";
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

const Movies = ({ movies, isGet, ...props }) => {
    return (
        <div>
            <SearchBar {...props}/>
            <MovieList isGet={isGet} movies={movies}/>
        </div>
    )
}

export default Movies;