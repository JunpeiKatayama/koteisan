"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var env = process.env;
var mysql = require("mysql");
// コネクション作成
var con = mysql.createConnection({
    host: "db",
    user: env.MYSQL_USER,
    password: env.MYSQL_PASSWORD,
    database: env.MYSQL_DATABASE,
});
/**
 * チーム作成用エンドポイント
 */
router.post("/create", function (req, res, next) {
    const team = req.body.team;
    let pageId = getPageId();
    // 念の為ページIDの重複を調べて、重複している場合再度IDを生成
    while (isExists(pageId)) {
        pageId = getPageId();
    }
    team.page_id = pageId;
    team.created_at = new Date();
    team.updated_at = new Date();
    // DB操作
    const sql = "INSERT INTO team SET ?";
    con.query(sql, team, function (err, result) {
        if (err)
            throw err;
        res.header("Content-Type", "application/json; charset=utf-8");
        res.send({ page_id: pageId });
    });
});
/**
 * チームをpageIdから検索するエンドポイント
 */
router.get("/:pageId", function (req, res) {
    const pageId = req.params.pageId;
    const sql = "SELECT * FROM team WHERE page_id = ?";
    con.query(sql, pageId, function (err, result) {
        if (err)
            throw err;
        res.header("Content-Type", "application/json; charset=utf-8");
        res.send({ teamInfo: result });
    });
});
/**
 * 生成したページIDが存在するかどうか判定する
 * @param {string} pageId - page_id
 * @returns boolean
 */
function isExists(pageId) {
    const sql = `SELECT COUNT(id) AS count FROM team WHERE page_id = ?`;
    let count = 0;
    con.query(sql, pageId, function (err, rows, fields) {
        if (err)
            throw err;
        count = rows.count;
    });
    return count > 0 ? true : false;
}
/**
 * ランダムな文字列を返す関数
 * @returns {string} randStr - ランダム文字列
 */
function getPageId() {
    let exists = false;
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randStr = "";
    for (var i = 0; i < 16; i++) {
        randStr += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return randStr;
}
module.exports = router;
