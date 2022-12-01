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

//Send an EJS file along with some data by using the render method
app.get('/', (req, res) => {
  res.render('home', { variableName: 'Hello Mel' });
});

//Listen
app.listen(3000, (req, res) => {
  console.log('App is running on port 3000');
});
