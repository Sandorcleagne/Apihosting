const express = require("express");
require("./db/conn");
const Blog = require("./models/Blog");
const app = express();
const port = process.env.PORT || 8000;
// app.get("/", (req, res) => {
//   res.send("Hello Harsh");
// });
// Create a new user
app.use(express.json());
// app.post("/users", (req, res) => {
//   console.log(req.body);
//   const user = new User(req.body);
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((error) => {
//       res.status(400).send(error);
//     }); // to save the in mongodb
// });
app.post("/blogs", async (req, res) => {
  try {
    const user = new Blog(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// read the data of the users
app.get("/blogs", async (req, res) => {
  try {
    const userData = await Blog.find();
    res.send(userData);
  } catch (error) {
    res.send(error);
  }
});
//get indivisual user data
app.get("/blog/:id", (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);
    res.send(_id);
  } catch (error) {}
});
app.listen(port, () => {
  console.log(`Connection is sucessfull at ${port}`);
});
