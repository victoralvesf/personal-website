const express = require("express");
const app = express();

app.listen(5500, () => {
  console.log("Application started and Listening on port 5500");
});

// serve your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
