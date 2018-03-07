// this is the middleware for restricting routes

module.exports = function(req, res, next) {
    if(req.user){
        return next();
    }
    //If the user isnt logged in go to login
    return res.redirect("/");
}