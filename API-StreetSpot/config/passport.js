'use strict';
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

var User = require('../mongoModels/user');
var jwtconfig = require('./database');


module.exports = function(passport) {
    var opts = {};

    opts.secretOrKey = jwtconfig.secret;
    opts.audience = jwtconfig.audience;
    opts.jwtFromRequest = ExtractJwt.fromHeader('access-token');

    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.findOne({
            username: jwt_payload.sub
        }, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else done(null, false, 'You should not be there =O');
        });
    }));
};
