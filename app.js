/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = require('./src/config/index').port;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./src/routes/index'));

app.use((req, res) => {
  res.status(404).send({ message: `Route${req.url} Not found.` });
});

app.listen(PORT, () => {
  console.log('Server running on port 3030');
});
