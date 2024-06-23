const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    name: String,
    detail: {
        type: String
    },
    price: {
        type: Number
    },
    file: String
}, {timestamps: true})

module.exports = mongoose.model('project', projectSchema)