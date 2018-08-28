const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));
const cors = require('cors');
app.use(cors());
app.use(express.json());

const fs = require('fs');
const dataPath = 'data/drinks.json';

function readData() {
    const raw = fs.readFileSync(dataPath);
    const data = JSON.parse(raw);
    return data;
}

app.get('/api/drinks', (req, res) => {
    const data = readData();
    res.send(data);
});

app.post('/api/drinks', (req, res) => {
    const data = readData();
    data.push(req.body);
    fs.writeFileSync(dataPath, JSON.stringify(data));
    res.send(req.body);
});

const PORT = 3000;

app.listen(PORT, () => console.log('app is running!'));