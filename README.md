![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# Weekend Movies Sagas

## Description

_Duration: 3 Day Sprint_

This website displays a list of movies that come from a database. The list is retrieved with Redux-Saga and store in a Redux state. The client takes those states to display the information to the page. There is currently a home page that list the movies, a details page that shows more information about a particular movie, and a page where you can add a new movie to the database.

### Visit: Heroku Deployment Coming Soon

## Checklist
See: https://github.com/hesscm/movies-sagas/wiki/Checklist

## Screen Shot

![Example of Movies Sagas](moviessagaSS.PNG "Movies Sagas")

### Prerequisites

- Any IDE such as VS Code or a web browser, NPM, postgresql and associated database software.

## Installation
1. Fork the repository
2. Ensure that [git is installed](https://git-scm.com/downloads) on your Mac/PC.
2. Copy the SSH link under 'Code'.
3. Enter terminal(Mac) or Git Bash(Windows) and in your desired folder, type 'git clone git@github.com:hesscm/movies-sagas.git'.
4. Open with your preferred IDE.
5. You will need node.js installed. In the repo folder, type "npm install" to install all of the included dependencies.
6. You will also need postgres installed. Install a SQL database with the data in the data.sql file.
7. Type "npm run server" to get the server running.
8. Open a new terminal and type "npm run client" to get the react client going.
9. Run the app in the browser at "localhost:3000".
10. 

## Usage

1. Click a movie to see more information about that movie on the details page.
2. You are able to refresh the details page. Go back to the home page with the 'Back To List' button.
3. You can add a movie by clicking the 'Add a Movie' button.
4. Here, you are required to add something in each field. If you don't have a path handy, that's okay! There's one provided for you on the page.
5. You can add multiple genres to the movie. 
6. Cancel to go back to the home page and discard the form. Save to send it to the database.
7. You'll be sent back to the homepage and your movie should now be there!

## Built With

HTML, CSS, JavaScript, React, Redux, Redux-Saga, Axios, Material-UI, node.js(with express, moment, and pg)

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Shout out to Chris Black!)

## Support
If you have suggestions or issues, please email me at [chrishessmusic@gmail.com]
