const mongoose = require('mongoose')
const slugify = require('slugify')
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
    slug: {
        type: String,
        required: true,
        unique: true
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

guideSchema.pre('validate', function(next){
    if(this.title){
        this.slug = slugify(this.title, {lower: true, strict: true})
    }
    next()
})



module.exports = mongoose.model('Guide', guideSchema, 'guides')

