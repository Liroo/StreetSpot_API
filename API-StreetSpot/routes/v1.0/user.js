var express = require('express'),
    userModel = require('../../mongoModels/user');

var router = express.Router();

router.get('/', function(req, res) {
  userModel.find().exec(function(err, userList){
    res.json({data: userList});
  });
});

module.exports = router;
