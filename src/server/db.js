const mysql = require('mysql');
const express = require('express');

const pool = mysql.createPool({
  connectionLimit: 100,
  host: 'bitcoindt.com',
  port: 21,
  user: 'bitcojh0_root',
  password: 's1WnjE={ra6K',
  database: 'bitcojh0_foris_prototype1'
});

pool.getConnection((err, connection) => {
  if (err.code === 'ECONNREFUSED') {
      console.log('Connection refused error!...')
  }
  console.log('Mysql connection established...');
  if (connection) connection.release();
  return;
});

//162.241.253.30
module.exports = pool;
