const express = require('express');
const pool = require('../db');

const router = express.Router();

const recommendationEngine = () => {
  // create a recommendation engine that returns
  // a set number of college ids
  const recUnis = [
    'kansas_state_university',
    'stanford_university',
    'university_of_california_los_angeles'
  ];
  return recUnis;
};

const loadUniversityHome = () => {
  const recUnis = recommendationEngine().slice(0);
  // just seeing if this portion of the code is being run
  console.log('Can you hear me?');
  const data = [];
  for (var i = 0; i < recUnis.length; i++) {
    const sql = 'SELECT * FROM universities WHERE id = ?';
    pool.query(sql, [recUnis[i]], (err, result) => {
      if (err) throw err;
      data.push({
        university_id: result.id,
        university_name: result.name,
        university_image_uri: result.image_uri
      });
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })
    return data;
  }
};

router.get('/', (req, res, next) => {
  const data = loadUniversityHome();
  res.json(data);
});

module.exports = router;
