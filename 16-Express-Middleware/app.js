const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const app = express();
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');

// Third-party Middleware
app.use(expressLayouts);
app.use(morgan('dev'));

// Built -in Middleware
app.use(express.static('public'));

// Application level middleware
app.use((req, res, next) => {
  console.log('Time', Date.now());
  next();
});

app.get('/', (req, res) => {
  // res.sendFile('./index.html', { root: __dirname });
  const mahasiswa = [
    {
      nama: 'Adiansyah Putra',
      email: 'adiansyahh424@gmail.com',
    },
    {
      nama: 'Erik',
      email: 'erik@gmail.com',
    },
    {
      nama: 'Doddy',
      email: 'dody@gmail.com',
    },
  ];
  res.render('index', {
    nama: 'Adiansyah Putraa',
    title: 'Halaman Home',
    layout: 'layouts/main-layout',
    mahasiswa,
  });
});

app.get('/about', (req, res) => {
  res.render('about', { layout: 'layouts/main-layout', title: 'Halaman About' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { layout: 'layouts/main-layout', title: 'Halaman Contact ehe' });
});

app.get('/product/:id', (req, res) => {
  res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`);
});

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
