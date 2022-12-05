const express = require('express');
//To recieve input values of a form, we have to use body-parser
const bodyParser = require('body-parser');

//Send an array for Books
const books = [
  {
    bookName: 'Hammy the Hampster',
    bookAuthor: 'Mc Hammer',
    bookPages: 200,
    bookPrice: 240,
    bookState: 'Available',
  },
  {
    bookName: 'Sky High',
    bookAuthor: 'Mr. Fly Guy',
    bookPages: 200,
    bookPrice: 240,
    bookState: 'Available',
  },
];

const app = express();
//Set the EJS as the default view engine
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', function (req, res) {
  res.render('index', {
    data: books,
  });
});

//Fetch values from the form using req.body.valueName and push it
app.post('/', (req, res) => {
  const inputBookName = req.body.bookName;
  const inputBookAuthor = req.body.bookAuthor;
  const inputBookPages = req.body.bookPages;
  const inputBookPrice = req.body.bookPrice;

  books.push({
    bookName: inputBookName,
    bookAuthor: inputBookAuthor,
    bookPages: inputBookPages,
    bookPrice: inputBookPrice,
    bookState: 'Available',
  });

  res.render('index', {
    data: books,
  });
});

//The return route for fetching the requested book's name and search for the element with the same name and the element state property to Available
app.post('/return', (req, res) => {
  var requestedBookName = req.body.bookName;
  books.forEach((book) => {
    if (book.bookName == requestedBookName) {
      book.bookState = 'Available';
    }
  });
  res.render('index', {
    data: books,
  });
});

app.post('/issue', (req, res) => {
  var requestedBookName = req.body.bookName;
  books.forEach((book) => {
    if (book.bookName == requestedBookName) {
      book.bookState = 'Issued';
    }
  });
  res.render('index', {
    data: books,
  });
});

//Delete a book with delete route that fetches the requested book name and searches for the element with the same book name
app.post('/delete', (req, res) => {
  var requestedBookName = req.body.bookName;
  var i = 0;

  books.forEach((book) => {
    i++;
    if (book.bookName == requestedBookName) {
      books.splice(i - 1, 1);
    }
  });

  res.render('index', { data: books });
});

//Send an EJS file along with some data by using the render method
/* app.get('/', (req, res) => {
  res.render('index', { variableName: 'Hello Mel' });
});
 */
//Listen
app.listen(3000, (req, res) => {
  console.log('App is running on port 3000');
});
