const express = require("express");

const app = express();
const port = 3000;

app.get("/:id", (req, res) => {
  const { id } = req.params;

  if (id === "2") {
    const user = { id: "1" };
    res.json(user);
  }
  res.status(404).json({ error: "user not found" });
});

app.listen(port, () => {
  console.log("server is listening on port 3000");
});
