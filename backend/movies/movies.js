const restful = require('node-restful')
const mongoose = restful.mongoose

const movies = new mongoose.Schema({
  original_title: { type: String, required: true },
  release_date: { type: String, required: true },
  overview: { type: String, required: true },
  vote_average: { type: Number, min: 0, max: 5, required: true },
  original_language: { type: String, required: true },
  backdrop_path: { type: String, required: true }
})

module.exports = restful.model('Movies', movies)
