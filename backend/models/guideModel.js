const mongoose = require('mongoose')
const slugify = require('slugify')
const sanitizedHtml = require('sanitize-html')


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
        this.sanitizedHtml = sanitizedHtml(this.markdown, {
            allowedAttributes: {
                '*': ["style"]
              },
            allowedStyles: {
                '*': {
                  // Match HEX and RGB
                  'color': [/^#(0x)?[0-9a-f]+$/i, /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/],
                  'text-align': [/^left$/, /^right$/, /^center$/],
                  // Match any number with px, em, or %
                  'font-size': [/^\d+(?:px|em|%)$/],
                  'border-collapse': [/^separate$/, /^collapse$/],
                  'width': [/^\d*(\.\d+)(?:px|em|%)$/, /^\d+(?:px|em|%)$/],
                  'height': [/^\d*(\.\d+)(?:px|em|%)$/, /^\d+(?:px|em|%)$/],
                  'border': [/^\d+(?:px|em|%)$/],
                  'border-style': [/^none$/, /^dotted$/, /^groove$/,/^double$/, /^solid$/],
                  'border-width': [/^\d+(?:px|em|%)$/],
                  'border-color': [/^#(0x)?[0-9a-f]+$/i, /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/],
                  'margin': [/^\d+(?:px|em|%)$/],
                  'margin': [/^auto$/, /^initial$/,/^inherit$/],

                }
              }
        })
    }
    next()
})



module.exports = mongoose.model('Guide', guideSchema, 'guides')

