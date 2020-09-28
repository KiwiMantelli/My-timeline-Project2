const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/timelines", {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.on("connected", () => console.log("MongoDB Connected!"));

mongoose.connection.on("error", () => console.log("Database Connection Error!!"));