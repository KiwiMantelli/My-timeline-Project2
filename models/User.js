const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    lastname: String,
    email: {type: String, unique: true},
    password: String,
    timelines: { type: Schema.Types.ObjectId, ref: "Timeline" },
    role: {type: String, enum: ["admin", "user"], default: "user"},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
    
   