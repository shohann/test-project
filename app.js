const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const app = express();
const port = process.env.PORT;


app.get('/', async (req, res) => {
    res.send({ title: "I am from render."})
});


app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
