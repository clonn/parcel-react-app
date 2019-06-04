import React, { useState, useEffect } from 'react';
import '../css/todo.css';
import "../css/movie.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import api from '../api/base';

const Movie = ({ imdbID:id, Title:title, Year:year, Poster:img, ...props }) => {

    const openSite = (e, src) => {
        window.open(src, '_blank');
    }

    const [rate, setRate] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const data = await api.getMovieById(id);
            setRate(data.imdbRating)
          }
          fetchData();
    }, [id])

    const src = `https://www.imdb.com/title/${id}`;
    
    return (
        <tr  onClick={(e) => openSite(e, src)}>
            <td className="logo"><img className="moive-img" src={img} /></td>
            <td className="title"><h4>{title}</h4>  {year}</td>
            <td className="rank"><h5 className="score"><FontAwesomeIcon className="star-icon" icon={faStar} />{rate}</h5></td>
        </tr>
    )
}

export default Movie;