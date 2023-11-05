const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Create a connection pool to your database
const pool = mysql.createPool({
  connectionLimit: 100,
  host: 'fish-1.cluster-cx0sld70xbt6.us-east-1.rds.amazonaws.com',
  user: 'postgres',
  password: 'Pratorian123',
  database: 'fish-1'
});

// API endpoint to fetch fishing reports
app.get('/fishingReports', (req, res) => {
  // Get a database connection from the pool
  pool.getConnection(function (err, connection) {
    if (err) {
      console.error('Error getting a database connection:', err);
      res.status(500).send(err);
      return;
    }

    // Query the database to fetch fishing report data
    connection.query('SELECT latitude, longitude FROM fishing_reports', function (error, results, fields) {
      // Release the database connection
      connection.release();

      if (error) {
        console.error('Error fetching data from the database:', error);
        res.status(500).send(error);
      } else {
        res.send(results);
      }
    });
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
