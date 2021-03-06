var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var db = require('../models');

passport.use( new LocalStrategy(
    {

    usernameField: 'email'

    },

    function(username,password,callback){
        db.user.findOne({
            where: {
                email: username
            }
        }).then(function(dbUser){
            // if user doesnt exist in db then
            if(!dbUser){
                return callback(null,false,{
                    message: "Incorrect username"
                });
                // if user exist but used wrong password
            } else if (!dbUser.validPassword(password)){
                return callback(null,false, {
                    message: "Incorrect password"
                });
            }
            // if none of the above, return the user
            return callback(null, dbUser)
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  module.exports = passport;