const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const universityHomeRouter = require('./routes/university_home');

app.use('/university_home/', universityHomeRouter);

app.listen(21, '0.0.0.0', (err) => {
  if (err) console.log('Error: ' + err);
  console.log('Express connection established...');
});
