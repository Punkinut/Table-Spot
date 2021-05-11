const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/home.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'public/make.html')));

app.get('/list', (req, res) => res.sendFile(path.join(__dirname, 'public/view.html')));

app.post('/reserve', (req, res) => {
    const newReservation = req.body;
    res.json(newReservation);
})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
