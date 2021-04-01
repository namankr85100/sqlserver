

var sql = require("mssql");

var config = {
    // user: 'test123',
    // password: 'test123',
    server: 'localhost\\SQLEXPRESS',
    database: 'naman',
    // port:1433,
    options:{
        enableArithAbort:true,
        trustedconnection:true
    }
};

sql.connect(config).then(pool => {
    // Query
    
    return pool.request()
        .input('input_parameter', sql.Int, value)
        .query('select * from [table]')
}).then(result => {
    console.dir(result)
}).catch(err => {
 console.log(err);
});