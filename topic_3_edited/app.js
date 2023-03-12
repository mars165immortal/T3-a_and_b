// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");

// const app = express();

// // Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, "public")));

// // Use body-parser middleware to parse POST requests
// app.use(bodyParser.urlencoded({ extended: false }));

// // Define the login route
// app.post("/login", function(req, res) {
// 	const username = req.body.username;
// 	const password = req.body.password;
// 	if (username === "user1" && password === "password1") {
// 		res.send("user1");
// 	} else if (username === "user2" && password === "password2") {
// 		res.send("user2");
// 	} else {
// 		res.status(401).send("Invalid username or password");
// 	}
// });

// // Define the user1 route
// app.get("/user1", function(req, res) {
// 	res.sendFile(path.join(__dirname, "/views/user1.html"));
// });

// // Define the user2 route
// app.get("/user2", function(req, res) {
// 	res.sendFile(path.join(__dirname, "/views/user2.html"));
// });

// // Start the server
// const port = 3000;
// app.listen(port, function() {
// 	console.log("Server started on port " + port);
// });
