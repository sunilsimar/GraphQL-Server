import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import * as path from "path";

const fs = require("fs");
const schemaString = fs.readFileSync(
  path.join(__dirname, "../schema.gql"),
  "utf8"
);
const schema = buildSchema(schemaString);

const authMiddleware = (req, res, next) => {
  req.authHeader = req.headers.authorization;
  next();
};

console.log("after middelware");

//resolvers
const root = {
  //{id} user sending the request
  getUser: ({ id }, req) => {
    console.log(req.authHeader);
    //mongoose/prisma logic to get the user
    if (id === "1") {
      return {
        id: "1",
        email: "sunil@gmail.com",
        firstname: "sunil",
        lastname: "simar",
      };
    }
    return null;
  },

  createUser: ({ input }, req) => {
    console.log(req.authHeader);
    //mongoose/prisma logic to store the user
    return { id: "2", ...input };
  },
};

const app = console.log("hello");

// const app = express();

// app.get("/healthcheck", (req: any, res: any) => {
//   res.json({"msg": "hi"});
// })
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));

// const PORT = 4000;
// app.listen(PORT, () => {
//   console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
// });
