var request = require('request');

module.exports.postBook = function(req, res) {
    var data = req.body;
    console.log("in node : " + JSON.stringify(data));
    // var response = request('POST', 'http://192.168.1.153:8080/book', {
    //      json: data,
    //      'headers': {
    //         'Access-Control-Allow-Origin': 'http://192.168.1.153:8080'
    //      }
    // });
    // console.log("response : " + response.getBody());
    // res.send(response.getBody());
    res.send({val : "this" });
};