import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from './AddMovie/AddMovie';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>

        <Route path="/" exact>
          <Link to="/addmovie">Add A New Movie</Link>
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
