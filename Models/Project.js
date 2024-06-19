const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 255
    },
    description: {
        type: String
    },
    image_url: {
        type: String,
        maxlength: 255
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('project', projectSchema)