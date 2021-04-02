const sql = require("mssql/msnodesqlv8");
const conn = new sql.ConnectionPool({
  database: "naman",
  server: "localhost\\SQLEXPRESS",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true
  }
});

conn.connect(conn)
.then(pool => {
  return pool.query('SELECT * from today')
})
.then((res) => {

    console.log(res);
    console.log("connected");
    
  // ... sproc call, error catching, etc
  // example: https://github.com/patriksimek/node-mssql#request
 
  // const request = new sql.Request()
 



})
.catch(function (err){
    if(err) console.log(err);
});