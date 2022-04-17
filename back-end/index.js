const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  const headers = req.header("User-id");
  const scope = req.header("Scope");
  const data = {
    id: 6,
    label: "Six",
  };
  if (headers !== "ifabula" && scope !== "user") {
    res.status(401).send({
      responseCode: 401,
      responseMessage: "UNAUTHORIZED",
    });
  } else {
    res.send(data);
  }
});

app.post("/post", (req, res) => {
  const data = {
    id: 7,
    label: "Seven",
  };
  res.send(data);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
