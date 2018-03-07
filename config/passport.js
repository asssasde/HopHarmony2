const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use( new localStrategy(
{
    usernameField: "email"
},

function (email, password, done ){
    db.User.findOne({
        where: {
            email:email
        }
    }).then((dbUser)=>{
        //If the there is no user with the given email
        if(!dbUser){
            return done(numll, false), {
                message: "Incorrect Email"
            };
        }
        else if (!dbUser.validPassword(password)){
            return done(null, false, {
                message: "Incorrect password"
            })
        }
        return done(null,dbUser);
    })


}

));
