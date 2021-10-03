import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieListItem from './MovieListItem';
import { useHistory } from 'react-router';
import { Typography } from '@mui/material';

function MovieList() {
    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies); //from reducer

    //on page load, get the movies
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //go to /addmovie page 'Add A Movie' button is clicked
    const handleClickEvent = () => {
        history.push("/addmovie");
    }

    return (
        <main>
            <Typography variant="h3">Here are our movies. Click a movie to learn more!</Typography>
            <Button
                variant="contained"
                style={{
                    backgroundColor: "#640d14",
                    width: "200px",
                    fontSize: "20px",
                    margin: "10px",
                }}
                onClick={handleClickEvent}>
                Add A Movie
            </Button>
            <br /> <br />
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <MovieListItem key={movie.id} movie={movie} />
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;