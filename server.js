//// Greeting

const express = require("express");
const app = express();
const port = 3000;

app.get('/greeting', (req, res) => {
    console.log('Express is listening...');
    res.send('Hello, stranger.');
});

app.get('/greeting/:name', (req, res) => {
    res.send("Hello " + req.params.name + "! It's so great to see you!");
})

////// Tip Calculator

app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log('good luck');
    res.send(`Tip Amount: ${req.params.total * (req.params.tipPercentage / 100)}`);
});


///// Magic 8 Ball

const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

app.get('/magic/:question', (req, res) => {
    const magicEightBall = responses[Math.floor(Math.random() * responses.length)];
    res.send(`<h1>${magicEightBall}</h1>`);
});


app.listen(port, () => {
    console.log("listening on port: ", port);
});

