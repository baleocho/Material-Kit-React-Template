const express = require("express");
const app = express();
const port = 5000;
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

//////////////////////////////////////////////////////////////Front end ROOT
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname));
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname));
});
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/baleocho/index.html");
});
app.use("/", express.static(__dirname + "/baleocho"));
//////////////////////////////////////////////////////////////end Front end ROOT

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
