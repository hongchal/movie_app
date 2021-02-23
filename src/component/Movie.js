import React from 'react';
import PropTypes, { string } from 'prop-types';
import {Link} from 'react-router-dom';

import "../style/css/Movie.css";

function Movie({ id ,title, year, summary, poster, genres}){
    return (
        <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie__data">
            <Link to={
                {
                    pathname : `/movie/${id}`,
                    state : {
                        title,
                        year,
                        summary,
                        poster,
                        genres
                    }
                }
            }>
            <h3 className="movie__title">{title}</h3>
            </Link>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre, index) =>  
                    <li key={index} className="movie__genres__genre">{genre}</li>
                )}
            </ul>
            <p className="movie__summary">{`${summary.slice(0, 180)}...`}</p>

        </div>
        
        {/* {console.log(genres)} */}
    </div>
    )
}

Movie.prototype= {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(string).isRequired
};

export default Movie;