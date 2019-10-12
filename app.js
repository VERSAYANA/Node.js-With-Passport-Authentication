const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

// Routes
const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');

app.use('/', indexRoute);
app.use('/users', usersRoute);

app.listen(PORT, console.log(`Server started on port ${PORT}`));