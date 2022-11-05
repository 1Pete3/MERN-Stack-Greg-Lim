require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 8000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/v1/movies', require('./api/movies.route'));
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
