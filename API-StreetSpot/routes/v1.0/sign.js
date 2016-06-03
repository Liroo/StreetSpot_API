var express = require('express'),
    userModel = require('../../mongoModels/user'),
    jwt = require('jwt-simple'),
    config = require('../../config/database'),
    validator = require('validator');

var router = express.Router();

router.post('/signup', function(req, res) {
    if (!req.body.username || !req.body.password || !req.body.email || !validator.isEmail(req.body.email)) {
        return res.json({
            success: false
        });
    }
    var newUser = new userModel({
        username: req.body.username,
        password: req.body.password
    });
    newUser.save(function(err) {
        if (err) {
            return res.json({
                success: false,
                error: err
            });
        }
        res.status(201).json({
            success: true
        });
    });
});

router.post('/signin', function(req, res) {
    userModel.findOne({
        username: req.body.username
    }, function(err, user) {
        if (err) throw err;

        if (!user) {
            res.status(401).send();
        } else {
            user.comparePassword(req.body.password, function(err, isMatch) {
                if (isMatch && !err) {
                    var iat = new Date().getTime() / 1000;
                    var exp = iat + config.tokenExpirationTime;
                    var payload = {
                        aud: config.audience,
                        iat: iat,
                        exp: exp,
                        sub: user.username
                    };
                    var token = jwt.encode(payload, config.secret);
                    res.json({
                        token: token
                    });
                } else {
                    res.status(401).send();
                }
            })
        }
    })
});

module.exports = router;
