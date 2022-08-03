const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    email:{
        type: String
    }
})

module.exports = mongoose.model("Users", userSchema)

