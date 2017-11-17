var express = require("express");
var app = express();
const bodyParser = require('body-parser');
var pg = require("pg");


app.use(express.static('client/build'));
app.use(bodyParser.json());
app.use(express.static('client/build'));
app.use(bodyParser.json());
// app.use(express.static('client/build'));
app.use(bodyParser.json());

var pool = new pg.Pool({
    user: "brennan",
    password: "",
    host: "localhost",
    port: 5432,
    database: "item_database",
    ssl: false
});

app.get('/api/items/', function(req, res) {
        pool.query("SELECT * FROM item_database").then(function(result) {
            res.send(result.rows);
        });
});

app.post('/api/items/', function (req, res){

    var newItem = req.body; // getting parsed json
    var sql = "INSERT INTO item_database(name,price)"+
        "VALUES ($1::text, $2::int)";
    var values = [newItem.name, newItem.price];
    pool.query (sql,values).then(function(){
        res.status(201); // 201 created    
        res.send("INSERTED");
    });
});

app.delete ('/api/items/:id', function(req,res){
    var id = req.params.id;
    
    pool.query('DELETE FROM item_database WHERE id = $1::int',[id]).then(function(){
        res.status(204); // 204 deleted
        res.send ("DELETED");
    });
});

var port = process.env.PORT || 5005;
app.listen(5005, function () {
    console.log("JSON Server is running " + port);
});