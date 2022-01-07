var express = require("express");
var router = express.Router();
var env = process.env;
var mysql = require("mysql");
import Team from "../interface/team";

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
router.post("/create", function (req: any, res: any, next: any) {
  const team: Team = req.body.team;
  let pageId: string = getPageId();
  // 念の為ページIDの重複を調べて、重複している場合再度IDを生成
  while (isExists(pageId)) {
    pageId = getPageId();
  }
  team.page_id = pageId;
  team.created_at = new Date();
  team.updated_at = new Date();
  // DB操作
  const sql: string = "INSERT INTO team SET ?";
  con.query(sql, team, function (err: any, result: any) {
    if (err) throw err;
    res.header("Content-Type", "application/json; charset=utf-8");
    res.send({ page_id: pageId });
  });
});

/**
 * チームをpageIdから検索するエンドポイント
 */
router.get("/:pageId", function (req: any, res: any) {
  const pageId: string = req.params.pageId;
  const sql: string = "SELECT * FROM team WHERE page_id = ?";
  con.query(sql, pageId, function (err: any, result: any) {
    if (err) throw err;
    res.header("Content-Type", "application/json; charset=utf-8");
    res.send({ teamInfo: result[0] });
  });
});

/**
 * 生成したページIDが存在するかどうか判定する
 * @param {string} pageId - page_id
 * @returns boolean
 */
function isExists(pageId: string): boolean {
  const sql: string = `SELECT COUNT(id) AS count FROM team WHERE page_id = ?`;
  let count: number = 0;
  con.query(sql, pageId, function (err: any, rows: any, fields: any) {
    if (err) throw err;
    count = rows.count;
  });
  return count > 0 ? true : false;
}

/**
 * ランダムな文字列を返す関数
 * @returns {string} randStr - ランダム文字列
 */
function getPageId(): string {
  let exists = false;
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randStr = "";
  for (var i = 0; i < 16; i++) {
    randStr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randStr;
}

module.exports = router;
