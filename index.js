const express = require("express");
const app = express();
const PORT1 = process.env.PORT || 8000;
//middleware -- plugin
//app.use(express.urlencoded({ extended: false }));
// Use the body-parser middleware to parse JSON requests
//app.use(bodyParser.json());

//Routes

app.get("/", function (req, res) {
	console.log("A new request received at " + Date.now());
	res.send("                  Home page. -- new    :)  :)            ");
});



//app.listen(PORT1, () => console.log(`Server started at port ${PORT1}`));

app.listen(PORT1, () => {
     console.log(`Example app listening at http://localhost:${PORT1}`);
  });