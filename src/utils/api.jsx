var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = 'a80bf0f8d4ff3d2';

module.exports = {
  get: function(url){
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    });
  }
};

Api.get('images');
