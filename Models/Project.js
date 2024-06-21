const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    name: String,
    detall: {
        type: String
    },
    price: {
        type: Number
    }
}, {timestamps: true})

module.exports = mongoose.model('project', projectSchema)