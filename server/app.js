const express = require("express");
const mongoose = require("mongoose");

const PORT = 4001;
const MONGO_URI = "mongodb://localhost:27017/new-words-wiki-db";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

app.use("/user", require("./routes/user"));
