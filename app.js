const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;
const staticDir = "static";

app.get("/files/:name/:extension", (req, res, next) => {
  if (req.params.name && req.params.extension) {
    req.url = `${req.params.name}.${req.params.extension}`;
    express.static(path.join(__dirname, staticDir))(req, res, next);
  }
});

app.get("*", (req, res) => {
  res.status(404).send("Not found");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
