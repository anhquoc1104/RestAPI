//re-build
//require libary
let express = require("express");
let app = express();

//Cấu hình EJS
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

//require socket and open port
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(8080);

//use socket
io.on("connection", function(socket){
	console.log("connect socket: " + socket.id);
});

//render 
app.get("/", function(req, res){
	res.render("Home");
});
//route - params - syntas `` - { }
app.get('/params/:name/:age', (req, res) => {
	let {name, age} = req.params;
	// let name = req.params.name;
	// let age = req.params.age;
	res.send(`${name} : ${age}`);
});
app.get('calculator/params/:operation/:soA/:soB')