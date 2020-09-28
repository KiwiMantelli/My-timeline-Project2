const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.on("connected", () => console.log("MongoDB Connected!"));

mongoose.connection.on("error", () => console.log("Database Connection Error!!"));