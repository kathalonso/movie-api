const express = require('express');
const {getAllMovies, getMByTitle, getMByDir} = require('./controllers/movies');

const app = express ()

//request for all data
app.get('/movies', getAllMovies)

//request for a movie by title
app.get('/movies/:title', getMByTitle) 

//request for all movies by a director
app.get('/movies/:director', getMByDir)
    
app.all('*', (request, response) => {
    return response.status(404).send('Oops')
  })  

app.listen(1337, () => {
console.log('Listening on 1337...') 
})