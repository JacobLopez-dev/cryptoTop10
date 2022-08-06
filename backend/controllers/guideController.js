const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3')

const asynchHandler = require('express-async-handler');
const User = require('../models/userModel')
const Guide = require('../models/guideModel');

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_BUCKET_REGION
})

// upload to aws s3
const upload = (bucketName) =>
  multer({
    storage: multerS3({
      s3,
      bucket: bucketName,
      metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
      },
      key: function (req, file, cb) {
        cb(null, `image-${req.body.title}`);
      },
    }),
  });

// @description get guides
// @route       GET /api/guides/all-guides
// @access      Public
const getGuides = asynchHandler(async(req, res) => {
    const guides = await Guide.find().sort({
        createdAt: 'desc'
    })
    res.status(200).json(guides)
})


// @description get guide
// @route       GET /api/guides/:slug
// @access      Public
const getGuide = asynchHandler(async(req, res) => {
    const guide = await Guide.findOne({slug: req.params.slug})

    if(!guide){
        res.status(404)
        throw new Error('Guide not found')
    }

    res.status(200).json(guide)
})

// @description get all guides belonging to a particular user
// @route       GET /api/guides/:authorName
// @access      Public
const getUsersGuides = asynchHandler(async(req, res) => {
    const guides = await Guide.find(
        {author: req.params.authorID}
    ).sort({
        createdAt: 'desc'
    })
    res.status(200).json(guides)
})


// @description post guide
// @route       POST /api/guides
// @access      Private
// Upload file, then create the new guide with the req.file.location that was created (the amazon s3 link)
const createGuide = asynchHandler(async(req, res) => {

    const uploadSingle = upload('ttc-guide-images').single('coverImage');

    uploadSingle(req, res, async (err) => {
        if(err) return res.status(400).json({success: false, message: err.message})

        // // Check for required fields
        const {title, description, markdown} = req.body;
        // const {location} = req.file;
        if(!title || !description || !markdown){
            res.status(400)
            throw new Error('Please fill all fields')
        }

        const user = await User.findById(req.user.id)

        if(!user){
            res.status(401)
            throw new Error('User not found')
        }

        const guide = await Guide.create({
            author: req.user.id,
            title, 
            description,
            markdown,
            authorName: user.name,
            coverImage: req.file.location
        })
        res.status(201).json(guide)
    })
})

// @description get guides
// @route       PUT /api/guides/:slug
// @access      Public
const updateGuide = asynchHandler(async(req, res) => {
    // Find guide - if no match return not found
    const guide = await Guide.findOne({slug: req.params.slug})

    if(!guide){
        res.status(404)
        throw new Error('Guide not found')
    }

    // Ensure user is logged in
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    // Check for required request body value
    const {title, description, markdown, slug} = req.body;

    if(!title || !description || !markdown || !slug){
        res.status(400)
        throw new Error('Please fill all fields')
    }

    const updateGuide = await Guide.findOneAndUpdate({slug: req.params.slug}, req.body, {new: true})
    await updateGuide.save()
    res.status(201).json(updateGuide)
})


// @description delete guide
// @route       DELETE /api/guides/:slug
// @access      Private
const deleteGuide = asynchHandler(async(req, res) => {
    const guide = await Guide.findOne({slug: req.params.slug})

    if(!guide){
        res.status(404)
        throw new Error('Guide not found')
    }

    await guide.remove()
    
    res.status(200).json({success: true})
})


module.exports = {
     getGuide,
     getGuides,
     getUsersGuides,
     createGuide,
     deleteGuide,
     updateGuide
}