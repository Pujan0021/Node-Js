const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email.']
    },
    password: {
        type: String,
        require: true,
        minlength: 8
    },
    confirmPassword: {
        type: String,
        required: true,
        validate: function (val) {
            return val == this.password;
        }
    }
});
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) return next();
    // encripting password
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined;
    next();
})
const User = mongoose.model("user", user);
module.exports = User;