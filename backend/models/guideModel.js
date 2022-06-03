const mongoose = require('mongoose')
mongoose.set('debug', true);

const guideSchema = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        require: [true],
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    description: {
        type: String,
        required: [true, 'Please provide description']
    },
    markdown: {
        type: String, 
        required: [true]
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('Guide', guideSchema, 'guides')

