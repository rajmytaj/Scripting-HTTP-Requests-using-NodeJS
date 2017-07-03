  var https = require('https');

module.exports = function getHTML (options, callback) {
  function getHTML (options, callback) {

    https.get(options, function (response) {
      var finalData;
      response.on('data', function (data) {
        finalData += data;
      });
      response.on('end', function(){
        callback(finalData);
      });
    }) 
  }

  function printHTML (html) {
    console.log(html);
  }

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

  getHTML(requestOptions,printHTML); 
}