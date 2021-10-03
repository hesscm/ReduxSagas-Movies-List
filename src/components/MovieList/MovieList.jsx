import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieListItem from './MovieListItem';
import { useHistory } from 'react-router';

function MovieList() {
    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleClickEvent = () => {
        history.push("/addmovie");

    }

    return (
        <main>
            <h1>Here are our movies. Click to learn more!</h1>
            <Button
                variant="contained"
                style={{
                    backgroundColor: "#640d14",
                    width: "200px",
                    fontSize: "20px",
                    margin: "10px",
                    hover: "red"
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