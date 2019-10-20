//re-build
let express = require("express");
let NodeEx = express();

NodeEx.use(express.static("public"));
NodeEx.set("view engine", "ejs");
NodeEx.set("views", "./views");

var server = require("http").Server(NodeEx);
var io = require("socket.io")(server);
server.listen(8080);

io.on("connection", function(socket){
	console.log("connect socket: " + socket.id);
});

NodeEx.get("/", function(req, res){
	res.render("Home");
});