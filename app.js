const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

// Routes
const indexRoute = require('./routes/index');
app.use('/', indexRoute);

app.listen(PORT, console.log(`Server started on port ${PORT}`));