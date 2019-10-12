const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Routes
const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');

app.use('/', indexRoute);
app.use('/users', usersRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));