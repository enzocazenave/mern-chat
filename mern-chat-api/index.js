const express = require('express');
const { dbConnection } = require('./database/config');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

dbConnection();

app.listen(PORT, () => {
    console.log(`Server running on port ${ PORT }`);
});

app.use(express.static('public'));
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));