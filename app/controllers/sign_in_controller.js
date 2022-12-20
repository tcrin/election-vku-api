const db = require("../common/connect");

exports.getAllSignIn = async (req, res) => {
  db.query("SELECT * FROM signin;", (err, result) => {
    if (err) {
      res.send("Lỗi");
    } else {
      res.send({ result: result.rows });
    }
  });
};

exports.getSignInById = async (req, res) => {
  let { uid } = req.params;
  db.query("SELECT * FROM signin WHERE uid = $1;", [uid], (err, result) => {
    if (err) {
      res.send("Lỗi");
    } else {
      res.send({ result: result.rows });
    }
  });
};

exports.insertSignIn = async (req, res) => {
  let { uid, phone, email } = req.body;
  db.query(
    "INSERT INTO signin(uid, phone, email) VALUES ($1, $2, $3);",
    [uid, phone, email],
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

exports.updateSignIn = async (req, res) => {
  let { uid, phone, email } = req.body;
  //let { uid } = req.params;
  db.query(
    "UPDATE signin SET phone = $1, email = $2 WHERE uid = $3;",
    [phone, email, uid],
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

exports.deleteSignIn = async (req, res) => {
  let { uid } = req.params;
  db.query("delete from signin where uid = $1", [uid], (err, result) => {
    if (err) {
      res.send("Lỗi");
    } else {
      res.send("Delete was successful " + uid);
    }
  });
};
