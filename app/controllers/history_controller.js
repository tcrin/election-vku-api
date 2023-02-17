const db = require("../common/connect");

exports.getHistory = async (req, res) => {
  db.query(
    "select * from history",
    (err, result) => {
      if (err) {
        res.send("Lỗi");
      } else {
        res.send({ result: result.rows });
      }
    }
  );
};

exports.getHistoryByTXTHash = async (req, res) => {
  let { txt_hash } = req.params;
  db.query(
    'select * from history where txt_hash = $1',
    [txt_hash],
    (err, result) => {
      if (err) {
        res.send("Lỗi");
      } else {
        res.send({ result: result.rows });
      }
    }
  );
};

exports.getHistoryById = async (req, res) => {
    let { id } = req.params;
    db.query(
      'select * from history where id = $1',
      [id],
      (err, result) => {
        if (err) {
          res.send("Lỗi");
        } else {
          res.send({ result: result.rows });
        }
      }
    );
  };

exports.insertHistory = async (req, res) => {
  let { txt_hash, block_number, status , timestamp_txt , address_from, address_to, vote_eth , voter_eth, vote_for, voter, event } = req.body;
  db.query(
    `INSERT INTO "event"(txt_hash, block_number, status , timestamp_txt , address_from, address_to, vote_eth , voter_eth, vote_for, voter, event) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`,
    [txt_hash, block_number, status , timestamp_txt , address_from, address_to, vote_eth , voter_eth, vote_for, voter, event],
    (err, result) => {
      if (!err) {
        //res.send(result);
        res.send("Insertion was successful");
      } else {
        console.log(err.message);
      }
    }
  );
};