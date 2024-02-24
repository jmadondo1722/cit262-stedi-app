const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send("Hello Browser");
});

app.get('/your_name', (req, res) => {
    res.send("Hello Josiah");
});

app.listen(port, () => console.log("Listening"));
