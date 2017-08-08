var express = require ("express");
var hsb = require ("hbs");

var app = express();

app.use((req, res, next) => {
    //res.send("Mohon Maaf Sedang Maintenance");
    next();
});

app.use(express.static(__dirname + "/public")); // use middleware

app.get("/", (req, res) => {

    var person = {
        nama: "Kuta",
        alamat: "BSD"
    };
//     res.send("<u>Selamat Datang di Website IoT</u.");
    res.send(person);
 });

 var results = {
     results: [{
         Timestamp: 12345,
         Temperature: 20,
         Humidity: 30
     }, {
         Timestamp: 55555,
         Temperature: 15,
         Humidity: 23
     }, {
         Timestamp: 88888,
         Temperature: 17,
         Humidity: 76
    
     }],
        id: "MyID12345"
 }

 app.get("/room", (req, res) => {
     res.render("room.hbs", results);

 });

 app.get("/about", (req, res) => {
     res.send("<h1>Halaman About</h1>");

 });

app.get("/contact", (req, res) => {
     res.send("<h1>Halaman Contact<h1>");

 });
 
 // process.env.PORT
 // untuk upload ke Heroku

 var port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log("Server Started");
});