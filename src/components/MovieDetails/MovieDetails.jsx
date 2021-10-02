import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieDetailsItem from './MovieDetailsItem';

function MovieDetails() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    console.log('movieDetails', movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS_MOVIE' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
            </section>
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