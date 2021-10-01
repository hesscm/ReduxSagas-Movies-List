import { useDispatch } from 'react-redux';

function MovieListItem({ movie }) {
    const dispatch = useDispatch();

    const handleClickEvent = () => {
        console.log('hey there');
        dispatch({type: 'TO_DETAILS_PAGE', payload: movie.id})
    }

    return (
        <div onClick={handleClickEvent}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} />
        </div>
    );
}

export default MovieListItem;