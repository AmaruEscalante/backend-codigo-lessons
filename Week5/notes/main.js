//Package installed with NPM

let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    database: 'testdb',
    user: 'root',
    password: 'toor'
});

// DB connection
connection.connect((err)=>{
    if (err){
        console.log('Conection error' + err.stack);
        return;
    }
    console.log('Connected to ID: ' + connection.threadId);
})


connection.query('SELECT * FROM servicios', (err, res)=>{
    if(err)
        throw err;
    res.forEach(r => {
        console.log(r);
    });
})

connection.end();