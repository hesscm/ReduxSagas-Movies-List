import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'
import { Typography } from '@mui/material';

function MovieListItem({ movie }) {
    const dispatch = useDispatch();
    const history = useHistory();
    let genresString = ''; //empty string to hold genres

    const makeGenresString = () => {
        for (let i = 0; i < movie.genres.length; i++) {
            if (i != movie.genres.length - 1) { //if this isn't the last element...
                //add a genre to the string with a comma
                genresString += movie.genres[i] + ', ';
            } else { //this is the last element. just add the genre
                genresString += movie.genres[i];
            }
        }
    }
    makeGenresString(); //call this function

    //send clicked movie data to saga, go to details page.
    const handleClickEvent = () => {
        dispatch({ type: 'TO_DETAILS_PAGE', payload: movie.id })
        history.push('/details')
    }

    return (
        <div className="movie" onClick={handleClickEvent}>
            <Typography variant="h5">{movie.title}</Typography>
            <br />
            <img src={movie.poster} alt={movie.title} />
            <Typography variant="h6">Genres</Typography>
            <Typography variant="subtitle2">{genresString}</Typography>
        </div>
    );
}

export default MovieListItem;