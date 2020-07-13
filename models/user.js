const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    favoriteLangage: String,
})

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;