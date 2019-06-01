import React from 'react';
import '../css/todo.css';
import "../css/movie.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Movie = ({ imdbID:id, Title:title, Year:year, Poster:img, ...props }) => {

    const openSite = (e, src) => {
        window.open(src, '_blank');
    }

    const src = `https://www.imdb.com/title/${id}`;
    return (
        <tr  onClick={(e) => openSite(e, src)}>
            <td className="logo"><img className="moive-img" src={img} /></td>
            <td className="title"><h4>{title}</h4>  {year}</td>
            <td className="rank"><h5 className="score"><FontAwesomeIcon className="star-icon" icon={faStar} />{props.imdbRating}</h5></td>
        </tr>
    )
}

export default Movie;