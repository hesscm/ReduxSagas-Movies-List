import { useDispatch } from 'react-redux';

function AddMovie() {

    const handleClickEvent = () => {
        history.push("/");
    }
    return (
        <div>
            <p>Add movie.</p>
            <button onClick={handleClickEvent}>Back To List</button>
        </div>

    );
}

export default AddMovie;