const express = require('express');
const { dbConnection } = require('./database/config');

require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

dbConnection();

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server running on port ${ PORT }`);
});

app.use(express.static('public'));
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));