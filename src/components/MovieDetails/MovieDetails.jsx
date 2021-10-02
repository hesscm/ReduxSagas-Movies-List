import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieDetails.css'


function MovieDetails() {

    const dispatch = useDispatch();
    const movie = useSelector(store => store.movie);
    const genres = useSelector(store => store.genres);
    let genresString = '';

    const makeGenresString = () => {
        console.log('oh no', genres);
        for (let i = 0; i < genres.length; i++) {
            if (i != genres.length - 1) {
                genresString += genres[i] + ', ';
            } else {
                genresString += genres[i];
            }
        }
    }
    makeGenresString();



    useEffect(() => {
        dispatch({ type: 'GET_MOVIE' });
    }, []);

    return (
        <main>
            <div className='movie'>
                <h1>{movie.title}</h1>
                <img src={movie.poster} alt={movie.title} />
                <h4>Genres: {genresString}</h4>
                <h4>Description</h4> <br />
                {movie.description}
            </div>
        </main>

    );
}

export default MovieDetails;










































// import { Router, Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';

// function MovieDetails() {
//     //movieID to track selected movie from state
//     const movieID = useSelector(store => store.movieID);
//     //movies array from state
//     const dispatch = useDispatch();
//     const movies = useSelector(store => store.movies)
//     let movieToDisplay = {}; //movie object that is displayed to DOM

//     console.log('movies', movies + movies.length);


//     // page renders before state is retrieved on refresh. this is a band-aid fix
//     if (movies.length === 0) {
//         console.log('empty array');
//     }
//     else { //set movie 
//         movieToDisplay = { title: movies[movieID].title};
//     }

//     //get movies from DB on page load
//     useEffect(() => {
//         dispatch({ type: 'FETCH_MOVIES' });
//     }, []);

//     return (
//         <>
//             <Link to="/">Back</Link>
//             {JSON.stringify(movieToDisplay)}

//             {/* <img src={reduxStore.movies[reduxStore.movieID].poster} alt={ reduxStore.movies[reduxStore.movieID].title} /> */}
//             <p>Details</p>
//         </>
//     );
// }

// export default MovieDetails;