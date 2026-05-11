const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'A-PHZ2-CIDI-04',
    user: 'root',
    password: '',
    database: 'Catanova'
});
module.exports = pool.promise();