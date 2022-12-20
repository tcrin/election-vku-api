const db = require("../common/connect");

const MyUser = function (myuser) {
  this._id = myuser._id;
  this._name = myuser._name;
  this.age = myuser.age;
};

MyUser.get_all = function (result) {
  db.query("SELECT * FROM myuser;", function (err, myuser) {
    if (err) {
      result(null);
    } else {
      result(myuser.rows);
    }
  });
};

// MyUser.insertUser = function(req,res){
//     var user = req.body;
//     db.query("INSERT INTO myuser(_id,_name,age) VALUES (${user._id},'${user._name}',${user.age});",function(err,myuser){
//         if(err){
//             result(null);
//         }else{
//             result(myuser);
//         }
//     })

// }

module.exports = MyUser;
