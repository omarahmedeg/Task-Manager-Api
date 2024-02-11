const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, {timestamps: true})
module.exports = mongoose.model('task', taskSchema)
