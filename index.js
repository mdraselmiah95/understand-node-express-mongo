const express = require("express");
const app = express();
const port = 7000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/* 
one time:
1. nodemon globally install
2. mongodb atlas user, access
3. Network access (ip address allow)




*/
