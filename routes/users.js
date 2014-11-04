var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    var db = req.db;
    var mycollection = db.collection('usercollection');
    mycollection.find(function(err, docs) {
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

module.exports = router;
