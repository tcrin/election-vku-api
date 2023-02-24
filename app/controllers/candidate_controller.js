const db = require("../common/connect");

exports.getStudent = async(req, res) => {
  db.query("Select * from student;", (err, result) => {
    if (err) {
      res.send("Lỗi");
    } else {
      res.send({ result: result.rows });
    }
  });
}

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
  let { vote, accept, winner , txt_hash , block_number , status , timestamp_txt , address_from , address_to , id_voter } = req.body;
  db.query(
    `insert into candidate(vote, accept, winner , txt_hash , block_number , status , timestamp_txt , address_from , address_to , id_voter) 
    values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
    [vote, accept, winner , txt_hash , block_number , status , timestamp_txt , address_from , address_to , id_voter],
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
exports.getCandidateEvent = async (req, res) => {
  db.query("SELECT * FROM event_candidate_cross_ref", (err, result) => {
    if (err) {
      res.send("Lỗi");
    } else {
      res.send({ result: result.rows });
    }
  });
};

exports.insertCandidateToEvent = async (req, res) => {
  let { id_event, idCandidate } = req.body;
  db.query(
    `INSERT into event_candidate_cross_ref(id_event, idCandidate)
    values ($1, $2)`,
    [id_event, idCandidate],
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
  let { idCandidate , vote , accept , winner , txt_hash , block_number , status , timestamp_txt , address_from , address_to , id_voter} = req.body;
  db.query(
    "UPDATE candidate SET vote = $2, accept = $3, winner = $4, txt_hash = $5 , block_number = $6, status = $7, timestamp_txt = $8, address_from = $9, address_to = $10, id_voter =$11 WHERE idCandidate = $1;",
    [idCandidate , vote , accept , winner , txt_hash , block_number , status , timestamp_txt , address_from , address_to , id_voter],
    (err, result) => {
      if (!err) {
        res.send("Update was successful");
      } else {
        console.log(err.message);
      }
    }
  );
};

exports.updateCandidateAccept = async (req, res) => {
  let { id_voter } = req.body;
  db.query(
    "UPDATE candidate SET accept = true WHERE id_voter = $1;",
    [ id_voter ],
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