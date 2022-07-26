const path = require('path')
const express = require('express');
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const cors = require("cors")
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())


app.get('/', (req,res) => {
    res.status(201).json({message: 'Welcome'})
})

app.use('/api', require('./routes/cryptoRoute'))
app.use('/api/guides', require('./routes/guideRoute'))
app.use('/api/users', require('./routes/userRoutes'))

// Serve Frontend
if(process.env.NODE_ENV === 'production'){
    // Set static build folder
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html'))
}else{
    app.get('/', (req,res) => {
        res.status(201).json({message: 'Welcome to Crypto Top 10'})
    })
}

app.use(errorHandler)

app.listen(PORT, () => console.log(`backend server started on ${PORT}`));
