const express = require('express');
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req,res) => {
    res.status(201).json({message: 'Welcome'})
})

app.use('/api', require('./routes/cryptoRoute'))
app.use('/api/guides', require('./routes/guideRoute'))
app.use('/api/users', require('./routes/userRoutes'))


app.use(errorHandler)

app.listen(PORT, () => console.log(`backend server started on ${PORT}`));
