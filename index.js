var express = require("express");
var app = express();

var bodyParser = require('body-parser')

app.use(express.json());
// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// // parse application/json
app.use(bodyParser.json())

require('./app/routes/home_routes.js')(app);
require('./app/routes/sign_in_routes.js')(app);
require('./app/routes/position_routes.js')(app);
require('./app/routes/event_routes.js')(app);
require('./app/routes/voter_routes')(app);
require('./app/routes/candidate_routes')(app);
require('./app/routes/event_candidate_routes')(app);


app.listen(process.env.PORT || 3000)

// app.listen(3000, () => {
//   console.log("Server listening on http://localhost:3000");
// });
