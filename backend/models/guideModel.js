const mongoose = require('mongoose')
const slugify = require('slugify')
const marked = require('marked')
const sanitizedHtml = require('sanitize-html')
// const createDomPurify = require('dompurify')
// const {JSDOM} = require('jsdom')
// const domPurify = createDomPurify(new JSDOM().window)
// mongoose.set('debug', true);

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
        required: [true],
        trim: true
    },
    sanitizedHtml: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
},
{
    timestamps: true,
})

guideSchema.pre('validate', function(next){
    if(this.title){
        this.slug = slugify(this.title, {lower: true, strict: true})
    }

    if(this.markdown){
        this.sanitizedHtml = sanitizedHtml(marked.parse(this.markdown))
        // this.sanitizedHtml = domPurify.sanitize(marked.parse(this.markdown))
    }
    next()
})



module.exports = mongoose.model('Guide', guideSchema, 'guides')

