const db = require("../common/connect");

exports.getAllEventCandidate = async (req, res) => {
  db.query("SELECT * FROM event_candidate_cross_ref", (err, result) => {
    if (err) {
      res.send("Lỗi");
    } else {
      res.send({ result: result.rows });
    }
  });
};

exports.insertEventCandidate = async (req, res) => {
  let { id_event, idCandidate } = req.body;
  db.query(
    "insert into event_candidate_cross_ref(id_event, idCandidate) values ($1, $2)",
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

exports.getInfoEvent = async (req, res) => {
  db.query(
    "SELECT e.id_event , e.event, e.classed ,e.start_at ,e.end_at , p.position, count(*) as quantity FROM event_candidate_cross_ref sc INNER JOIN candidate c ON c.idcandidate  = sc.idcandidate INNER JOIN event e ON e.id_event  = sc.id_event  INNER JOIN position p ON p.id_position  = e.id_position  WHERE sc.id_event = 4 and c.accept = true group by e.id_event, e.event, e.classed ,e.start_at ,e.end_at , p.position",
    (err, result) => {
      if (err) {
        res.send("Lỗi");
      } else {
        res.send({ result: result.rows });
      }
    }
  );
};

exports.getInfoAllEvent = async (req, res) => {
    db.query(
      "SELECT e.id_event , e.event, e.classed ,e.start_at ,e.end_at , p.position, count(*) as quantity FROM event_candidate_cross_ref sc INNER JOIN event e ON e.id_event  = sc.id_event  INNER JOIN position p ON p.id_position  = e.id_position group by e.id_event, e.event, e.classed ,e.start_at ,e.end_at , p.position",
      (err, result) => {
        if (err) {
          res.send("Lỗi");
        } else {
          res.send({ result: result.rows });
        }
      }
    );
  };


