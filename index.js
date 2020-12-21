const API_key = '9301dbfb9eeb49ae99cfbdd92f8bcc47';

let url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          API_key;
let req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })