const { Client, Pool } = require("pg");

const client = new Client({
  connectionString:
    "postgres://postgres:rin010300@database-election.cd6mzyu9j7ol.ap-northeast-1.rds.amazonaws.com:5432",
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect(function (err) {
  if (err) console.log("Kết nối thất bại");
});

module.exports = client;
//"postgres://avqqhagrdcqtth:9d597bee2ef6341a87fa70ce04f90f9c05ca27d9cdd39e3dbb937b16395fa9d1@ec2-3-229-252-6.compute-1.amazonaws.com:5432/dde778vl6hjco9"
