const asyncHandler = require('express-async-handler')

// @description Register new User
// @route /api/users
// @access Public
const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('please include all fields')
       
    }

    res.send('Register Route')
})


// @description Login User
// @route /api/users/login
// @access Public
const loginUser = asyncHandler(async(req, res) => {
    res.send('Login Route')
})

module.exports = {
    registerUser,
    loginUser
}