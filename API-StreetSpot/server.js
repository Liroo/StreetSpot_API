var express = require('express');
logger = require('morgan'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    config = require('./config/database'),
    mongoose = require('mongoose'),
    user = require('./mongoModels/user'),
    passportConfig = require('./config/passport')
routesVersioning = require('express-routes-versioning');

mongoose.connect(config.database);

var app = express();

passportConfig(passport);

/*
  Config for express
*/
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(passport.initialize());

function localAuthv1(req, res, next) {
    passport.authenticate('jwt', {
        session: false
    }, function(err, user, info) {
        if (err) {
            res.status(403).json({
                fullError: err
            })
        }
        if (user) {
            return next();
        }
        return res.status(403).json({
            fullError: info
        });
    })(req, res, next);
}

app.use('/', require('./routes/v1.0/sign'));

app.use('/api', localAuthv1
    /*routesVersioning({
  "1.0": localAuthv1,
  localAuthv1
})*/
);

app.use('/api/user', require('./routes/v1.0/user'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});


/*
  Launch server
*/
var port = process.env.PORT || 3000;
app.set('port', port);
var server = app.listen(app.get('port'), function() {
    console.log('StreetSpot is running on port : ' + server.address().port);
});
