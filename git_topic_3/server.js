const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const base = `${__dirname}/public`;

// Serve static files from the "public" directory
app.use("/public",express.static("public"));

// Serve static files from the "images" directory
app.use("/images", express.static("images"));

// Use body-parser middleware to parse POST requests
app.use(bodyParser.urlencoded({ extended: false }));

// Define the login route
app.post("/login", function(req, res) {
	const username = req.body.username;
	const password = req.body.password;
	if (username === "user1" && password === "password1") {
		res.send("user1");
	} else if (username === "user2" && password === "password2") {
		res.send("user2");
	} else if (username === "user3" && password === "password3") {
		res.send("user2");
	} else if (username === "user4" && password === "password4") {
		res.send("user2");
	} else {
		res.status(401).send("Invalid username or password");
	}
});

app.get("/", function(req, res) {
	res.sendFile(`${base}/index.html`);
});

// Define the user1 route
app.get("/user1", function(req, res) {
	res.sendFile(`${base}/views/user1.html`);
});

// Define the user2 route
app.get("/user2", function(req, res) {
	res.sendFile(`${base}/views/user2.html`);
});

app.get("/user3", function(req, res) {
	res.sendFile(`${base}/views/user3.html`);
});

app.get("/user4", function(req, res) {
	res.sendFile(`${base}/views/user4.html`);
});

app.get("/about", function(req, res) {
	res.sendFile(`${base}/views/about.html`);
});

// Start the server
const port = 3000;
app.listen(port, function() {
	console.log("Server started on port " + port);
});
