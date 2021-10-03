import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'
import { Typography } from '@mui/material';

function MovieListItem({ movie }) {
    const dispatch = useDispatch();
    const history = useHistory();

    //send clicked movie data to saga, go to details page.
    const handleClickEvent = () => {
        dispatch({ type: 'TO_DETAILS_PAGE', payload: movie.id })
        history.push('/details')

    }

    return (
        <div className="movie" onClick={handleClickEvent}>
            <Typography variant="h4">{movie.title}</Typography>
            <br />
            <img src={movie.poster} alt={movie.title} />
        </div>
    );
}

export default MovieListItem;