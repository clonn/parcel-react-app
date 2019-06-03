import React from 'react'

function MovieInfo (movie) {
    console.log(movie)
    return (
        <tr>
            <td><img src = {movie.Poster}></img></td>
            <td>{movie.Title}</td>
            <td>{movie.Year}</td>
        </tr>
    )
}

export default MovieInfo;