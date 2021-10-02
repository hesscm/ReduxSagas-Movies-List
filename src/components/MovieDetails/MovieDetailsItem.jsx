import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieDetailsItem({ movie }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClickEvent = () => {
        console.log('hey there');
        dispatch({ type: 'TO_DETAILS_PAGE', payload: movie.id })
        history.push('/details')

    }

    return (
        <div onClick={handleClickEvent}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} />
        </div>
    );
}

export default MovieDetailsItem;