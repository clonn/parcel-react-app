import React from 'react'
import MoiveInfo from './MoiveInfo'

function MovieList(movies) {
    return (
        <table id = "movie" align="center">
            <tbody>
                <tr>
                    <th>Photo</th>
                    <th>Title</th>
                    <th>Year</th>
                </tr>
                {
                    Object.values(movies).map(function(movie, index){
                        return (
                                <MoiveInfo key = {index} {...movie}/>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default MovieList;