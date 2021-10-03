import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieDetails.css'
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

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
    makeGenresString(); //call this function

    //when 'Back To List' is clicked, go to home page
    const handleClickEvent = () => {
        history.push("/");
    }

    return (
        <main>
            <div className='details'>
                <Typography variant="h4">{movie.title}</Typography>
                <img src={movie.poster} alt={movie.title} />
                <Typography variant="h6">Genres: {genresString}</Typography>
                {/* a little styling for the description */}
                <div className='description'>
                    <div className='descriptionTitle'>
                        <Typography variant="h5">Description</Typography>
                    </div>
                    <Typography variant="subtitle1">{movie.description}</Typography>
                </div>
                <br />
                {/* button to go to home page */}
                <Button
                    style={{
                        backgroundColor: "#640d14",
                        margin: "10px"
                    }}
                    variant="contained" onClick={handleClickEvent}>
                    Back To List
                </Button>
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