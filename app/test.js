/*var http = require('http');
var mongojs = require('mongojs');

var db = mongojs('books');
var mycollection = db.collection('usercollection');

exports.doit = function() {
    var data = '';
    var url = 'http://www.bbc.co.uk/programmes/b006qsq5.json';

    // http.get(url, function(res) {
    //     res.on("data", function(chunk) {
    //         data += chunk;
    //     });
    //     res.on('end', function() {
    //         //console.log(data);
    //     });
    // }).on('error', function(e) {
    //   console.log("Got error: " + e.message);
    // });

    // find everything
    mycollection.find(function(err, docs) {
        console.log(docs)
    });

}*/