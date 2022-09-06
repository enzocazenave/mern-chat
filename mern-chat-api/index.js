const express = require('express');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${ PORT }`);
});

app.use(express.static('public'));
app.use(express.json());