const db = require("../common/connect");

exports.getAllPosition = async (req, res) => {
  db.query("SELECT * FROM position;", (err, result) => {
    if (err) {
      res.send("Lỗi");
    } else {
      res.send({ result: result.rows });
    }
  });
};

exports.getPositionById = async (req, res) => {
  let { id_position } = req.params;
  db.query('SELECT * FROM "position" WHERE id_position = $1;', [id_position], (err, result) => {
    if (err) {
      res.send("Lỗi");
    } else {
      res.send({ result: result.rows });
    }
  });
};


exports.insertPosition = async (req, res) => {
  let { position } = req.body;
  db.query(
    'INSERT INTO "position"("position") VALUES ($1);',
    [position],
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

exports.updatePosition = async (req, res) => {
  let { id_position, position } = req.body;
  //let { uid } = req.params;
  db.query(
    'UPDATE "position" SET "position" = $1 WHERE "id_position" = $2;',
    [position, id_position],
    (err, result) => {
      if (!err) {
        //res.send(result);
        res.send("Update was successful");
      } else {
        console.log(err.message);
      }
    }
  );
};

exports.deletePosition = async (req, res) => {
  let { id_position } = req.params;
  db.query('delete from "position" where id_position = $1', [id_position], (err, result) => {
    if (err) {
      res.send("Lỗi");
    } else {
      res.send("Delete was successful " + id_position);
    }
  });
};

