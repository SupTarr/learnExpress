import express, { request } from "express";
const app = express();

// Serves Express Yourself website
app.use(express.static("public"));

import {
  getElementById,
  getIndexById,
  updateElement,
  seedElements,
  createElement,
} from "./utils.js";

const expressions = [];
seedElements(expressions, "expressions");

const PORT = process.env.PORT || 4001;

app.get("/expressions", (req, res, next) => {
  res.send(expressions);
});

app.get("/expressions/:id", (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});

// Using queries
app.put("/expressions/:id", (req, res, next) => {
  if (getIndexById(req.params.id, expressions) !== -1) {
    const Result = updateElement(req.params.id, req.query, expressions);
    res.send(Result);
  } else {
    res.status(404).send();
  }
});

// Creating An Expression
app.post("/expressions", (req, res, next) => {
  if (createElement("expressions", req.query) !== false) {
    expressions.push(createElement("expressions", req.query));
    res.status(201).send(createElement("expressions", req.query));
    console.log(expressions);
  } else {
    res.status(400).send();
  }
});

// Deleting Old Expressions
app.delete("/expressions/:id", (req, res, next) => {
    if(getIndexById(req.params.id, expressions) !== -1) {
        const oldExpressions = getIndexById(req.params.id, expressions);
        expressions.splice(req.params.id, 1, oldExpressions);
        res.send(expressions);
    }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
