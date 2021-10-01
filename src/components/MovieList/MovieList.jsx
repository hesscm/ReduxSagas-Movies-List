import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieListItem from './MovieListItem';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <MovieListItem key={movie.id} movie={movie}/>
                        // <div key={movie.id} >
                        //     <h3>{movie.title}</h3>
                        //     <img src={movie.poster} alt={movie.title}/>
                        // </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;