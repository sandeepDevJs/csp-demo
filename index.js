const express = require("express");
const app = express();

app.get("/index.js", (req, res) => {
	res.setHeader("Content-Type", "text/javascript");
	res.sendFile(__dirname + "/public/index.js");
});

app.get("/", (req, res) => {
	res.setHeader("Content-Type", "text/html");
	res.setHeader(
		"Content-Security-Policy",
		"script-src 'self' cdnjs.cloudflare.com" //whitelists js file sources it can execute
		// "script-src 'self'" // only same domain js files can be executed
		// none of above will allow you to execute inline js
	);

	res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, () => console.log("server strted at 3000"));
