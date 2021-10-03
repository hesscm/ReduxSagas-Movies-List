import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import './AddMovie.css';
import { Typography } from '@mui/material';

//NOTE: My MUI select code was taken directly from https://mui.com/components/selects/ and adjusted to fit this program
function AddMovie() {
    const history = useHistory();
    const dispatch = useDispatch();

    const genres = [ //list of available genres
        'Adventure', 'Animated', 'Biographical', 'Comedy',
        'Disaster', 'Drama', 'Epic', 'Fantasy', 'Musical',
        'Romantic', 'Science Fiction', 'Space-Opera', 'Superhero'
    ];

    //movie to be submitted when form is complete
    const [newMovie, setNewMovie] = useState({
        title: '',
        poster: '',
        description: '',
        genres: '',
    });

    //array to hold genres selected
    const [newGenres, setNewGenres] = useState([]);

    //when clicked, back to the home page
    const handleCancelButton = () => {
        history.push("/");
    }

    //this logic was taken from https://mui.com/components/selects/
    //when the selections are changed, adjust the newGenres array. I don't fully understand this
    const handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0; i < options.length; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setNewGenres(value); //this is the new array
        setNewMovie({ ...newMovie, genres: value }); //set the genres to the new array
    };

    //dispatch the form data to a saga
    const handleFormSubmit = (event) => {
        event.preventDefault(); //stop page from refreshing
        dispatch({type: 'ADD_NEW_MOVIE', payload: newMovie})
        console.log(newMovie);
        alert('New Movie Added. Now Returning to the main page.')
        history.push("/"); //go to the home page
    }
    return (
        <div className='movieForm'>
            <Typography variant="h5">Add a movie!</Typography>

            <form onSubmit={handleFormSubmit}>
                <input
                    required
                    type='text'
                    placeholder='Title'
                    id="title"
                    value={newMovie.title}
                    onChange={(event) => setNewMovie({ ...newMovie, title: event.target.value })}
                />
                <input
                    required
                    type='text'
                    placeholder='Poster Path'
                    id="poster"
                    value={newMovie.poster}
                    onChange={(event) => setNewMovie({ ...newMovie, poster: event.target.value })}
                />
                <br />
                <textarea
                    required
                    placeholder='Movie Description'
                    id="description"
                    value={newMovie.description}
                    onChange={(event) => setNewMovie({ ...newMovie, description: event.target.value })}
                />
                <br />
                {/* taken directly from MUI with minor labeling adjustments */}
                <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 175 }}>
                    <InputLabel style={{color: "white"}} shrink htmlFor="select-multiple-native">
                        Genres
                    </InputLabel>
                    <Select
                        required
                        multiple
                        native
                        style={{
                            borderColor: "red",
                            backgroundColor: "antiquewhite",
                            margin: "10px"
                        }}
                        value={newGenres}
                        // @ts-ignore Typings are not considering `native`
                        onChange={handleChangeMultiple}
                        label="genres"
                        inputProps={{
                            id: 'genres',
                        }}
                    >
                        {genres.map((genre) => (
                            <option key={genre} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </Select>
                </FormControl>

                <p>You can select multiple genres with the command(Mac) or ctrl(Windows) button.</p>
                <br />
                <Button 
                    style={{
                        backgroundColor: "#640d14",
                        margin: "10px"
                    }}
                variant="contained" 
                onClick={handleCancelButton}>Cancel</Button>
                <Button style={{
                    backgroundColor: "#ad2831",
                    margin: "10px"
                }}
                variant="contained" type="submit">Save</Button>
            </form>
        </div>
    );
}

export default AddMovie;