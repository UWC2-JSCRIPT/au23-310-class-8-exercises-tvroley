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
      const books = responseJson.results.books;
      let book = books[0];
      let author = book.author;
      let description = book.description;
      let title = book.title;
      const bookEl = document.createElement('p');
      bookEl.innerText = `${title} by ${author}: ${description}`;
      const booksContainer = document.getElementById('books-container');
      booksContainer.appendChild(bookEl);
    });
  });
