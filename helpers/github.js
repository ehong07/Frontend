const request = require('request');
//const config = require('../config.js');

var getReposByUsername = (req, resCallback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  var url = 'https://api.github.com';


  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  // var options = {
  //   url: `https://api.github.com/users/${req}/repos`,
  //   headers: {
  //     'User-Agent': 'request',
  //     'Authorization': `token ${config.TOKEN}`
  //   }
  // };

  // request(options, function(err, res, body) {
  //   var json = JSON.parse(body);
  //   resCallback(json);
  // });

}

module.exports.getReposByUsername = getReposByUsername;