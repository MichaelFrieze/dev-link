const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/users");
const profile = require("./routes/profile");
const posts = require("./routes/posts");

const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello"));

// Use Routes
app.use("/users", users);
app.use("/profile", profile);
app.use("/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on port ${port}`));
