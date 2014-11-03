var http = require('http');

exports.doit = function() {
    var data = '';
    var url = 'http://www.bbc.co.uk/programmes/b006qsq5.json';

    http.get(url, function(res) {
        res.on("data", function(chunk) {
            data += chunk;
        });
        res.on('end', function() {
            console.log(data);
        });
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });
}