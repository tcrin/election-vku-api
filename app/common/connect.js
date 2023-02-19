const { Client, Pool } = require("pg");

const client = new Client({
  connectionString: "postgres://tcrin:WgODMoykqLKgQqCFzhXBZFRtakMP925y@dpg-cfno5cirrk0eqlq8j8i0-a.singapore-postgres.render.com/electionvkudb" ,
  ssl: {
    rejectUnauthorized: true,
  },
  // acquireConnectionTimeout: 1000000
});

const pool = new Pool({
  connectionString: "postgres://tcrin:WgODMoykqLKgQqCFzhXBZFRtakMP925y@dpg-cfno5cirrk0eqlq8j8i0-a.singapore-postgres.render.com/electionvkudb" ,
  ssl: {
    rejectUnauthorized: true,
  },
});

async function connectToDatabase() {
  try {
    await pool.connect((err) => {
      if (err) {
        console.error('Error during connection:', err);
        return;
      }
      console.log('Connected to database');
    });
    
    // Xử lý sự kiện lỗi kết nối
    pool.on('error', (err) => {
      console.error('Database error:', err);
    });
    
    // Xử lý sự kiện ECONNRESET
    pool.on('end', () => {
      console.log('Database connection terminated');
    });
  } catch (err) {
    console.error('Error connecting to the database', err);
    // Reconnect to the database
    await pool.connect((err) => {
      if (err) {
        console.error('Error during connection:', err);
        return;
      }
      console.log('Reconnected to database');
    });
    
    // Xử lý sự kiện lỗi kết nối
    pool.on('error', (err) => {
      console.error('Database error:', err);
    });
    
    // Xử lý sự kiện ECONNRESET
    pool.on('end', () => {
      console.log('Database connection terminated');
    });
  }
}

// const client = new Client({
//   user: 'tcrin',
//   host: 'dpg-cfno5cirrk0eqlq8j8i0-a.singapore-postgres.render.com',
//   database: 'electionvkudb',
//   password: 'WgODMoykqLKgQqCFzhXBZFRtakMP925y',
//   port: 5432,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// })

connectToDatabase()

module.exports = pool;
//"postgres://avqqhagrdcqtth:9d597bee2ef6341a87fa70ce04f90f9c05ca27d9cdd39e3dbb937b16395fa9d1@ec2-3-229-252-6.compute-1.amazonaws.com:5432/dde778vl6hjco9"

 // "postgres://postgres:rin010300@database-election.cd6mzyu9j7ol.ap-northeast-1.rds.amazonaws.com:5432",