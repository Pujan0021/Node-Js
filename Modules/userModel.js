const mongoose = require("mongoose");
const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validator: [validator.isEmail, 'Please enter a valid email.']
    },
    password: {
        type: String,
        require: true,
        minlength: 8
    },
    confirmPassword: {
        type: String,
        required: true,
        validator: function (val) {
            return val == this.password;
        }
    }
});
const User = mongoose.model("user", user);
module.exports = User;