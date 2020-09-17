const express = require('express');
const routes = express.Router();

const gameController = require('../controllers/gameController');

routes.post('/games', gameController.insert);
routes.get('/games', gameController.index);

module.exports = routes;