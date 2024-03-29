const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const User = require('../models/userModel')

// @description Register new User
// @route /api/users
// @access Public
const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('please include all fields')
       
    }

    // Find if user already exists
    const userEmailExists = await User.findOne({email})
    const userNameExists = await User.findOne({name})

    if(userEmailExists || userNameExists){
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.staus(400)
        throw new error('Invalid user data')
    }
})


// @description Login User
// @route /api/users/login
// @access Public
const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})
    // Check user and passwords match
    if(user && (await bcrypt.compare(password, user.password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
            isAdmin: user.isAdmin
        })
    }else{
        res.status(401)
        throw new Error('Invalid credentials')
    }
})

// @description GET current user
// @route /api/users/currentUser
// @access Private
const getCurrentUser = asyncHandler(async(req, res) => {
    const user = {
        id: req.user._id,
        email: req.user.email,
        name: req.user.name
    }
   res.status(200).json(user)
})

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '60d'
    })
}


module.exports = {
    registerUser,
    loginUser,
    getCurrentUser
}