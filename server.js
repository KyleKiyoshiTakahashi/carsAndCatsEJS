const path = require("path");

const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname+ "/static"));



app.get("/", function (request, response) {
    response.sendFile("index.html");
});



app.get('/cars', function (request, response){
	var cars= [
		"/images/car1.jpg",
		"/images/car2.jpg"
	];
	response.render("cars", {cars: cars} )
});

app.get('/cats', function (request, response){
	response.render("cats")
});

app.get('/forms', function (request, response){
	response.render("newcar")
});


app.listen(8000, function() {
  console.log("listening on port 8000");
});