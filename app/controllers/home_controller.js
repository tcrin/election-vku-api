var MyUser = require("../models/myuser");
const db = require("../common/connect");

exports.home = function (req, res) {
  res.send("hello");
};

exports.getAllUser = function (req, res) {
  MyUser.get_all(function (data) {
    res.send({ result: data });
  });
};

exports.insertUser = async (req, res) => {
  let { _id, _name, age } = req.body;
  db.query(
    "INSERT INTO myuser(_id,_name,age) VALUES ($1,$2,$3);",
    [_id, _name, age],
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

// exports.insertUser = function(user){
//     db.query("INSERT INTO myuser(_id,_name,age) VALUES ($1,'$2',$3);",[user._id,user._name,user.age]);
// }

//
