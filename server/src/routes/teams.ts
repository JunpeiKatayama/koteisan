var express = require('express');
var router = express.Router();
var env = process.env;
var mysql = require('mysql');

// コネクション作成
var con = mysql.createConnection({
  host: 'db',
  user: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE
})

/**
 * チーム作成用エンドポイント
 * @param {string} hoge - ホゲホゲええ
 */
router.get('/', function(req: any, res: any, next: any) {
  con.query('select COUNT(id) FROM user' ,function (err: any, rows: any, fields: any) {
    if (err) throw err
    const param: object = rows;
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(param);
  })
});

module.exports = router;
