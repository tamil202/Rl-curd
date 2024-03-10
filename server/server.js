// import requirements
const express = require("express");
const cors = require("cors");

// swapping
const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: { origin: "*" } }));

// routes
app.use(require("./routes/router"));

// listen
app.listen(port, () => {
  console.log(`server start from localhost:${port}`);
});
