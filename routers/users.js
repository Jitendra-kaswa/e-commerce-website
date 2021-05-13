const express = require('express');
const router  = express.Router();
const passport = require('passport');

const usersController = require('../controllers/users');

router.get('/login',usersController.Signin);
// router.post('/login',usersController.login);
router.post('/login',passport.authenticate('local',{successRedirect:"/",failureRedirect:"back"}));
router.get('/register',usersController.SignUp);
router.post('/register',usersController.register);

module.exports = router;