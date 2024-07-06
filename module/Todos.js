const mongoose = require("mongoose")

const todoShema = new mongoose.Schema({
    title: {
        type: String,
        // required: true
    },
    task: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("todo", todoShema)