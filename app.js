const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./src/routes/index'));

app.listen(3030, () => {
  console.log('Server running on port 3030');
});
