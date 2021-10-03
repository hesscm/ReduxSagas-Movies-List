import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('TO_DETAILS_PAGE', postMovieID);
    yield takeEvery('GET_MOVIE', getMovie);
    yield takeEvery('ADD_NEW_MOVIE', addMovie);
}

function* addMovie(action) {
    try {
        console.log('addMovie saga',action.payload);
        yield axios.post('/api/movie', action.payload);

    } catch (error) {
        console.log(error);
    }
}

function* getMovie() {
    try {
        const movie = yield axios.get('/api/movie/movieID');
        console.log(movie.data);
        yield put({ type: 'SET_MOVIE', payload: movie.data[0]})
        yield put({type: 'SET_GENRES', payload: movie.data[0].genres})

    } catch (error) {
        console.log(error);
    }
}

//function to post movie ID on the server
//The most recent movie viewed on the details page is saved on refresh
function* postMovieID(action) {
    try {
        yield axios.post('/api/movie/movieID', {id: action.payload});
        yield put({type: 'SET_MOVIE', payload: action.payload});
 
    } catch (error) {
        console.log(error);
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch(error) {
        console.log(error);
    }
        
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

//reducer to hold what movie was selected
const movie = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MOVIE':
            console.log('in movieID reducer', action.payload);
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            console.log('in genres reducer', action.payload);
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        movie,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
