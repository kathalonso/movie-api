/* eslint-disable max-len */
const movies = require('../movies');

const getAllMovies = (request, response) => {
    return response.send(movies)
}

const getMByTitle = (request, response) => {
  const title = request.params.title
  
  const foundTitle = movies.filter((movie) =>
    movie.title.toLowerCase().includes(title.toLowerCase())
    )
    return response.send(foundTitle)
}

//obj: how to access array element? or just array given partial director name
const getMByDir = (request, response) => {
  const foundDirector = movies.filter((movie) =>
      movie.directors.filter((director) =>
        director.toLowerCase().includes(request.params.directors.toLowerCase())
      )
    );
    return response.send(foundDirector);
  };

module.exports = {
    getAllMovies,
    getMByTitle,
    getMByDir,
}