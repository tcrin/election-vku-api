const db = require("../common/connect");

exports.getFullInfo = async (req, res) => {
  db.query(
    `SELECT can.idcandidate,can.vote, can.accept, can.winner, can.id_voter, 
    e.id_event, e."event", e.classed, e.start_at, e.end_at, e."position", e.txt_hash, e.block_number, e.contract_address,
    v.id_voter, v.first_name, v.last_name, v.dob, v.cccd, v.classes, v.avatar_url, v.achievement, v.title,
    v.gender, v.uid,
    s.uid, s.phone, s.email, s.created_at
    FROM "candidate" can
    JOIN "event_candidate_cross_ref" cf ON can.idcandidate = cf.idcandidate
    JOIN "event" e ON cf.id_event = e.id_event
    LEFT JOIN "voter" v ON can.id_voter = v.id_voter
    LEFT JOIN signin s ON s.uid = v.uid ;`,
    (err, result) => {
      if (err) {
        res.send("Lỗi");
      } else {
        res.send({ result: result.rows });
      }
    }
  );
};

exports.getCandidateOfEvent = async (req, res) => {
    var { id_event } = req.params;
    db.query(
      `SELECT can.idcandidate,can.vote, can.accept, can.winner, can.id_voter, 
      e.id_event, e."event", e.classed, e.start_at, e.end_at, e."position", e.contract_address, e.txt_hash, e.block_number,
      v.id_voter, v.first_name, v.last_name, v.dob, v.cccd, v.classes, v.avatar_url, v.achievement, v.title,
      v.gender, v.uid,
      s.uid, s.phone, s.email, s.created_at
      FROM "candidate" can
      JOIN "event_candidate_cross_ref" cf ON can.idcandidate = cf.idcandidate
      JOIN "event" e ON cf.id_event = e.id_event
      LEFT JOIN "voter" v ON can.id_voter = v.id_voter
      LEFT JOIN signin s ON s.uid = v.uid
      WHERE e.id_event = $1;`,
      [id_event],
      (err, result) => {
        if (err) {
          res.send("Lỗi");
        } else {
          res.send({ result: result.rows });
        }
      }
    );
  };

  exports.getCandidateOfEventValid = async (req, res) => {
    var { id_event } = req.params;
    db.query(
      `SELECT can.idcandidate,can.vote, can.accept, can.winner, can.id_voter, 
      can.txt_hash as "txt_hash_candidate", can.block_number as "block_number_candidate", can.status as "status_candidate",
      can.timestamp_txt as "timestamp_txt_candidate", can.address_from as "address_from_candidate", can.address_to as "address_to_candidate",
      e.id_event, e."event", e.classed, e.start_at, e.end_at, e."position", e.contract_address,
      e.txt_hash as "txt_hash_event", e.block_number as "block_number_event", 
      e.status as "status_event", e.timestamp_txt as "timestamp_txt_event" , e.address_from as "address_from_event" , e.address_to as "address_from_event",
      v.id_voter, v.first_name, v.last_name, v.dob, v.cccd, v.classes, v.avatar_url, v.achievement, v.title,
      v.gender, v.uid,
      s.uid, s.phone, s.email, s.created_at
      FROM "candidate" can
      JOIN "event_candidate_cross_ref" cf ON can.idcandidate = cf.idcandidate
      JOIN "event" e ON cf.id_event = e.id_event
      LEFT JOIN "voter" v ON can.id_voter = v.id_voter
      LEFT JOIN signin s ON s.uid = v.uid
      WHERE e.id_event = $1 and can.accept =true;`,
      [id_event],
      (err, result) => {
        if (err) {
          res.send("Lỗi");
        } else {
          res.send({ result: result.rows });
        }
      }
    );
  };

  exports.getCandidateOfEventInvalid = async (req, res) => {
    db.query(
      `SELECT can.idcandidate,can.vote, can.accept, can.winner, can.id_voter, 
      can.txt_hash as "txt_hash_candidate", can.block_number as "block_number_candidate", can.status as "status_candidate",
      can.timestamp_txt as "timestamp_txt_candidate", can.address_from as "address_from_candidate", can.address_to as "address_to_candidate",
      e.id_event, e."event", e.classed, e.start_at, e.end_at, e."position", e.contract_address,
      e.txt_hash as "txt_hash_event", e.block_number as "block_number_event", 
      e.status as "status_event", e.timestamp_txt as "timestamp_txt_event" , e.address_from as "address_from_event" , e.address_to as "address_from_event",
      v.id_voter, v.first_name, v.last_name, v.dob, v.cccd, v.classes, v.avatar_url, v.achievement, v.title,
      v.gender, v.uid,
      s.uid, s.phone, s.email, s.created_at
      FROM "candidate" can
      JOIN "event_candidate_cross_ref" cf ON can.idcandidate = cf.idcandidate
      JOIN "event" e ON cf.id_event = e.id_event
      LEFT JOIN "voter" v ON can.id_voter = v.id_voter
      LEFT JOIN signin s ON s.uid = v.uid
      WHERE can.accept =false;`,
      (err, result) => {
        if (err) {
          res.send("Lỗi");
        } else {
          res.send({ result: result.rows });
        }
      }
    );
  };

  exports.getWinnerOfEvent = async (req, res) => {
    var { uid } = req.params;
    db.query(
      `SELECT can.idcandidate,can.vote, can.accept, can.winner, can.id_voter, 
      e.id_event, e."event", e.classed, e.start_at, e.end_at, e."position", e.txt_hash, e.block_number, e.contract_address,
      v.id_voter, v.first_name, v.last_name, v.dob, v.cccd, v.classes, v.avatar_url, v.achievement, v.title,
      v.gender, v.uid,
      s.uid, s.phone, s.email, s.created_at
      FROM "candidate" can
      JOIN "event_candidate_cross_ref" cf ON can.idcandidate = cf.idcandidate
      JOIN "event" e ON cf.id_event = e.id_event
      LEFT JOIN "voter" v ON can.id_voter = v.id_voter
      LEFT JOIN signin s ON s.uid = v.uid 
     where v.uid = $1;`,
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