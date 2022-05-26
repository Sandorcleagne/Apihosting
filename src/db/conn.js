const mangoose = require("mongoose");
// This is returning us promise that's why we are using then and catch
mangoose
  .connect("mongodb://localhost:27017/users-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection is Sucessfull");
  })
  .catch((error) => {
    console.log("No Connection", error);
  });
