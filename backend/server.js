const express = require('express');
const cors = require('cors');
const db = require('./db');


const app = express();
app.use(cors());
app.use(express.json());


app.get('/api/users', (req, res) => {
db.all('SELECT * FROM users', (err, rows) => {
if (err) return res.status(500).json(err);
res.json(rows);
});
});


app.post('/api/users', (req, res) => {
const { name } = req.body;
db.run('INSERT INTO users(name) VALUES(?)', [name]);
res.json({ message: 'User added' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});


app.listen(5000, () => console.log('Backend running on port 5000'));
