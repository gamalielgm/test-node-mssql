var sql = require('mssql');

var config = {
    user: 'user',
    password: 'password',
    server: 'host\\instance', 
    database: 'database'
}
 
//sql.connect("mssql://user:password@host/instance/database").then(function() {
sql.connect(config).then(function() {
    new sql.Request().query('SELECT * FROM Products WHERE ProductID = 3').then(function(recordset) {
        console.dir(recordset);
    }).catch(function(err) {
        // ... query error checks 
        console.log(err);
    });
}).catch(function(err) {
    // ... connect error checks
    console.log(err); 
});