const db = require("../common/connect");

exports.getAllVoter = async (req, res) => {
  db.query("SELECT * FROM voter", (err, result) => {
    if (err) {
      res.send("Lỗi");
    } else {
      res.send({ result: result.rows });
    }
  });
};

exports.getVoterSignIn = async (req, res) => {
  db.query(
    "select id_voter , first_name , last_name , dob , cccd , classes , avatar_url , achievement , title , voter.uid, signin.phone , signin.email , signin.created_at from voter inner join signin on voter.uid  = signin.uid  order by classes",
    (err, result) => {
      if (err) {
        res.send("Lỗi");
      } else {
        res.send({ result: result.rows });
      }
    }
  );
};



exports.insertVoter = async (req, res) => {
  let { first_name, last_name, dob, cccd, classes, avatar_url, achievement, title, uid, gender, is_candidate} = req.body;
  db.query(
    "insert into voter(first_name, last_name, dob, cccd, classes, avatar_url, achievement, title, uid, gender, is_candidate) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
    [first_name, last_name, dob, cccd, classes, avatar_url, achievement, title, uid, gender, is_candidate],
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

exports.updateVoter = async (req, res) => {
  let { first_name, last_name, dob, cccd, classes, avatar_url, achievement, title, uid, gender } = req.body;
  db.query(
    "UPDATE voter SET first_name = $1, last_name = $2, dob = timestamp'$3', cccd = $4, classes = $5, avatar_url = $6, achievement = $7, title = $8, gender = $10 WHERE uid = $9;",
    [first_name, last_name, dob, cccd, classes, avatar_url, achievement, title, uid, gender],
    (err, result) => {
      if (!err) {
        res.send("Update was successful");
      } else {
        console.log(err.message);
      }
    }
  );
};

exports.updateVoterIsCandidate = async (req, res) => {
  let { is_candidate, id_voter } = req.body;
  db.query(
    "UPDATE voter SET is_candidate = $1 WHERE id_voter = $2;",
    [is_candidate, id_voter],
    (err, result) => {
      if (!err) {
        res.send("Update was successful");
      } else {
        console.log(err.message);
      }
    }
  );
};


exports.deleteVoter = async (req, res) => {
  let { uid } = req.params;
  db.query("delete from voter where uid = $1", [uid], (err, result) => {
    if (err) {
      res.send("Lỗi");
    } else {
      res.send("Delete was successful " + uid);
    }
  });
};

exports.getVoterByUid = async (req, res) => {
  let { uid } = req.params;
  db.query("SELECT * FROM voter WHERE uid = $1;", [uid], (err, result) => {
    if (err) {
      res.send("Lỗi");
    } else {
      res.send({ result: result.rows });
    }
  });
};

exports.getUserByUid = async (req, res) => {
  var { uid } = req.params;
  db.query(
    `SELECT voter.uid as voter_uid, signin.uid as signin_uid, *
    FROM voter INNER JOIN signin
    ON voter.uid = signin.uid
    where signin.uid = $1;`,
   [uid],
    (err, result) => {
      if (err) {
        res.send("Lỗi");
      } else {
        res.send({ result: result.rows });
      }
    }
  );
};