const { log } = require('console');
const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();

const port = 8000;
app.get('/', (req, res) => {
    return res.send('Home');
});
app.get('/:word', (req, res) => {
    return res.send(req.params.word);
});

app.get('/cipher/:name', (req, res) => {
    return res.send(Vigenere.Cipher('password').crypt(req.params.name));
});
app.get('/decipher/:name', (req, res) => {
    return res.send(Vigenere.Decipher('password').crypt(req.params.name));
});
app.listen(port, ()=>{
    console.log(`server ${port}`);
})

