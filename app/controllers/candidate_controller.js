const db = require("../common/connect");

exports.getAllCandidate = async (req, res) => {
  db.query("SELECT * FROM candidate", (err, result) => {
    if (err) {
      res.send("Lỗi");
    } else {
      res.send({ result: result.rows });
    }
  });
};

exports.insertCandidate = async (req, res) => {
  let { vote, accept, id_voter } = req.body;
  db.query(
    "insert into candidate(vote, accept, id_voter) values ($1, $2, $3)",
    [vote, accept, id_voter],
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

exports.updateCandidate = async (req, res) => {
  let { vote, accept, id_voter, idCandidate } = req.body;
  db.query(
    "UPDATE candidate SET vote = $1, accept = $2, id_voter = $3 WHERE idCandidate = $4;",
    [vote, accept, id_voter, idCandidate],
    (err, result) => {
      if (!err) {
        res.send("Update was successful");
      } else {
        console.log(err.message);
      }
    }
  );
};


exports.deleteCandidate = async (req, res) => {
  let { idCandidate } = req.params;
  db.query("delete from candidate where idCandidate = $1", [idCandidate], (err, result) => {
    if (err) {
      res.send("Lỗi");
    } else {
      res.send("Delete was successful " + uid);
    }
  });
};

exports.getCandidateByUid = async (req, res) => {
  let { idCandidate } = req.params;
  db.query("SELECT * FROM candidate WHERE idCandidate = $1;", [idCandidate], (err, result) => {
    if (err) {
      res.send("Lỗi");
    } else {
      res.send({ result: result.rows });
    }
  });
};