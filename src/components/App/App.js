import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from './AddMovie/AddMovie';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">The Movies Saga!</Typography>
      </header>

      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/details">
          <MovieDetails />
        </Route>

        <Route path="/addmovie">
          <AddMovie />
        </Route>

      </Router>
    </div >
  );
}

export default App;