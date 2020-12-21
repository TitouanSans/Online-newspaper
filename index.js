const API_key = '9301dbfb9eeb49ae99cfbdd92f8bcc47';

let url_bbc = 'http://newsapi.org/v2/top-headlines?' +
'sources=bbc-news&' + API_key;

let req = new Request(url_bbc);
fetch(req).then(function(response) {
    console.log(response.json());
    const news = response;
    console.log(news);
})