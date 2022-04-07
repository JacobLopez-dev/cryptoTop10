const express = require('express');
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
    res.status(201).json({message: 'Welcome'})
})

app.use('/api', require('./routes/cryptoRoute'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`backend server started on ${PORT}`));
