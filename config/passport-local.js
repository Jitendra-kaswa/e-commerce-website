const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/users');

const fields = {
  usernameField: "email",
  passwordField: "passowrd"
}

passport.use(new LocalStrategy(fields, (email, password, done) => {
  User.findOne({ email: email }, function (err, user) {
    if (err) { return done(err); }
    else if (!user || user.password !== password) { return done(null, false); }
    else { return done(null, user); }
  });
}
));

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser((id,done)=>{
  User.findById(id).exec().then((user) => done(null,user));
});

// passport.deserializeUser(function (id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });

