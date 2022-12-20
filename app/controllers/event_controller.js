const db = require("../common/connect");

exports.getEventPosition = async (req, res) => {
  db.query(
    'select id_event , "event", "classed", start_at , end_at, "position"."position" from "event" inner join "position" on "event".id_position = "position".id_position order by "event".id_position',
    (err, result) => {
      if (err) {
        res.send("Lỗi");
      } else {
        res.send({ result: result.rows });
      }
    }
  );
};

exports.getAllEvent = async (req, res) => {
  db.query('SELECT * FROM "event"', (err, result) => {
    if (err) {
      res.send("Lỗi");
    } else {
      res.send({ result: result.rows });
    }
  });
};

exports.getEventById = async (req, res) => {
  let { id_event } = req.params;
  db.query(
    'SELECT * FROM "event" WHERE id_event = $1;',
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

exports.insertEvent = async (req, res) => {
  let { event, classed, end_at, id_position } = req.body;
  db.query(
    'INSERT INTO "event"("event","classed", end_at, id_position) VALUES ($1, $2, $3, $4);',
    [event, classed, end_at, id_position],
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

exports.updateEvent = async (req, res) => {
  let { id_event, event, classed, end_at, id_position } = req.body;
  //let { uid } = req.params;
  db.query(
    'UPDATE "event" SET "event" = $2, classed = $3 end_at = $4, id_position = $5 WHERE id_event = $1;',
    [id_event, event, classed, end_at, id_position],
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

exports.deleteEvent = async (req, res) => {
  let { id_event } = req.params;
  db.query(
    'delete from "event" where id_event = $1',
    [id_event],
    (err, result) => {
      if (err) {
        res.send("Lỗi");
      } else {
        res.send("Delete was successful " + id_event);
      }
    }
  );
};
