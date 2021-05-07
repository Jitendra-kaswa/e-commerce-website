const express = require('express');
const router  = express.Router();

const usersController = require('../controllers/users');

router.get('/login',usersController.Signin);
router.post('/login',usersController.login);
router.get('/register',usersController.SignUp);
router.post('/register',usersController.register);

module.exports = router;