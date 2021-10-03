import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from './AddMovie/AddMovie';
import { Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

//establish a theme with MUI
//Source: https://blog.logrocket.com/3-ways-to-add-custom-fonts-to-your-material-ui-project/
const theme = createTheme({
  typography: {
    fontFamily: [
      'Franklin Gothic Medium',
      'Arial Narrow',
      'Arial',
      'sans-serif'
    ].join(','),
  },
});

function App() {
  return (
    //wrap the app in a theme with MUI
    <ThemeProvider theme={theme}>

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
    </ThemeProvider>
  );
}

export default App;