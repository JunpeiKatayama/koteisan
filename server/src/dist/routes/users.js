"use strict";
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
});
/* GET home page. */
router.get('/', function (req, res, next) {
    con.query('select COUNT(id) FROM user', function (err, rows, fields) {
        if (err)
            throw err;
        const param = rows;
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.send(param);
    });
});
module.exports = router;
