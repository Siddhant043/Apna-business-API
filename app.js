import express, { response } from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from the server",
    app: "Apna Business",
  });
});

const port = 3000;
app.listen(port, () => {
  console.log("Apna business backend initialized");
});
