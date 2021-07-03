const mongoose = require("mongoose");
const requiredString = {
    type: String,
    required: true,
};
const userSchema = new mongoose.Schema({
    fullname: requiredString,
    email: requiredString,
    password: requiredString,
});

const user = mongoose.model("user", userSchema);
module.exports = user;

// module.exports = mongoose.model("users", userSchema);
