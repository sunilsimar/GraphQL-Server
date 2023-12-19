import express from "express";
import * as path from "path";

const fs = require("fs");
const schemaString = fs.readFileSync(
  path.join(__dirname, "./schema.gql"),
  "utf8"
);

console.log(schemaString);
