const express = require('express');
const checkLogin = require('../middlewares/checkLogin');
const { edit } = require('../controllers/userController');

const Route = express.Router();

Route.patch('/profile/:email', checkLogin, edit);

module.exports = Route;
