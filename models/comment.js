const mongoose = require('mongoose');

const usersMassage = mongoose.Schema({
    massage: {
        type: String
    },
    
})

module.exports = mongoose.model("comments", usersMassage)