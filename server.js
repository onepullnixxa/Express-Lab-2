const express = require("express");
const app = express();
const port = 3000;

app.get('/greeting', (req, res) => {
    console.log('Express is listening...');
    res.send('Hello, stranger.');
});


app.listen(port, () => {
    console.log("listening on port: ", port);
});
