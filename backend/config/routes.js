const express = require('express')

module.exports = function(server) {

  const router = express.Router()
  server.use('/api', router)

  const moviesService = require('../movies/moviesService')
  moviesService.register(router, '/moviesService')

}
