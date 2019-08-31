const express = require("express");
const server = express();
server.use(express.json());

server.use(logger);

const RecipeRouter = require("./routes/recipeRouter");
server.use("/recipes/", RecipeRouter);

server.get("/", (req, res) => {
  res.send(`Works`);
});

function logger(req, res, next) {
  console.log(
    `Method: ${req.method}, url: ${
      req.url
    }, timestamp: [${new Date().toISOString()}]`
  );
  next();
}

module.exports = server;
