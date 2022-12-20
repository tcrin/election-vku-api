
// router.get("/", (req, res) => {
//     var sqlString = "SELECT * FROM myuser;"
//     client.query(sqlString, async (err, result) => {
//       if (err) throw err;
//       res.send({data: result.rows});
//       console.log(JSON.stringify(result.rows));
//       //client.end();
//     });
//   });




module.exports = function(router){
    var homeController = require('../controllers/home_controller');
    router.get('/', homeController.home);
    router.get('/user', homeController.getAllUser);
    router.post('/user', homeController.insertUser);
};

