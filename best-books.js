const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;
  const fullDate = `${year}-${month}-${date}`;

  const list = 'hardcover-fiction';

  const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/${fullDate}/${list}.json`;

  const url = `${BASE_URL}?api-key=${API_KEY}`;
  fetch(url)
    .then(function(data) {
      return data.json();
    })
    .then(function(responseJson) {
      console.log(responseJson);
      debugger;
      let article = responseJson.response.docs[0];
      console.log(article);
      
      const mainHeadline = article.headline.main;
      document.getElementById('article-title').innerText = mainHeadline;

      const snippet = article.snippet;
      document.getElementById('article-snippet').innerText = snippet;

      const articleLink = article.web_url;
      const articleLinkEl = document.getElementById('article-link');
      articleLinkEl.setAttribute('href', articleLink);
      
      const byLineEl = document.createElement('p');
      const byLine = article.byline.original;
      articleLinkEl.insertAdjacentElement('afterend', byLineEl);
      byLineEl.innerText = byLine;

      if (article.multimedia.length > 0) {
        const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
        document.getElementById('article-img').src = imgUrl;
      }
    });
  });
