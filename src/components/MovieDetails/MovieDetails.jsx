import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieDetails.css'
import {useHistory} from 'react-router-dom';

function MovieDetails() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movie = useSelector(store => store.movie); //movie reducer array
    const genres = useSelector(store => store.genres); //genres reducer array
    let genresString = ''; //empty string to hold genres

    //on page load, go get the last selected movie data from DB
    useEffect(() => {
        dispatch({ type: 'GET_MOVIE' });
    }, []);

    //transform the genres array into a string that is prettier on the DOM
    //doing this because {genres[0]} or mapping sometimes breaks the program.
    const makeGenresString = () => {
        for (let i = 0; i < genres.length; i++) {
            if (i != genres.length - 1) { //if this isn't the last element...
                //add a genre to the string with a comma
                genresString += genres[i] + ', '; 
            } else { //this is the last element. just add the genre
                genresString += genres[i];
            }
        }
        return genresString;
    }
    makeGenresString();

const handleClickEvent = () => {
    history.push("/");
}

    return (
        <main>
            <button onClick={handleClickEvent}>Back To List</button>
            <div className='movie'>
                <h1>{movie.title}</h1>
                <img src={movie.poster} alt={movie.title} />
                <h5>Genres: {genresString}</h5>
                <h3>Description</h3> <br />
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