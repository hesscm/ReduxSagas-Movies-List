const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
//variable to hold the movie ID. This is used to save the movie on the details page
let movieID = 0;

router.get('/', (req, res) => {
  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
}); //end movies get

//post route to change the movie ID variable
//This is used to save the movie on the details page
router.post('/movieID', (req, res) => {
  try {
    console.log('id', req.body);
    movieID = req.body.id;
    res.sendStatus(200);
  } catch (error) {
    console.log(err);
    res.sendStatus(500);
  }
}); //end movieID post

//get route to change the movie ID variable
//This is used to save the movie on the details page
router.get('/movieID', (req, res) => {
  console.log('movieID', movieID);
  const query = `SELECT movies.*, array_agg(genres.name) AS genres FROM movies JOIN movies_genres ON movies.id = movies_genres.movie_id JOIN genres ON genres.id = movies_genres.genre_id WHERE movies.id = ${movieID} GROUP BY movies.id;`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
      console.log(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
}); //end movies get

//post to add a movie to the DB
router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
    .then(result => {
      console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!

      const createdMovieId = result.rows[0].id

      // Now handle the genre reference
      const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

      // Catch for first query
    }).catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
}) //end movies post

module.exports = router;