const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const booksContainer = document.getElementById('books-container');

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
      for(let i = 0; i < 5; i++) {
        const book = books[i];
        const author = book.author;
        const description = book.description;
        const title = book.title;
        const bookEl = document.createElement('p');
        bookEl.innerText = `${title} by ${author}\n${description}`;
        booksContainer.appendChild(bookEl);
      }
    });
  });
