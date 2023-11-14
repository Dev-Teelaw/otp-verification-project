const express = require('express');
const mongoose = require('mongoose');
// const signup = require ("./routes/authRoutes.js")



const app = express();
app.use(express.json());

require('dotenv').config()
const PORT = process.env.PORT || 4000


// app.use(express.json())


//calling Database function
require('./config/database').connect()

//route importing and mounting
const user = require('./routes/userRoutes')
const signup = require('./routes/userRoutes')
const login = require('./routes/userRoutes')

app.use('/api/v1', user)
app.use('/api/v1', signup)
app.use('/api/v1', login)


app.listen(PORT, ()=>{
    console.log("Server Started")
   
})

// // middleware
// app.use(express.static('public'));

// // database connection
// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));


// mongoose.connect("mongodb://127.0.0.1:27017/otp-verification-project", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// } )

//   .then(console.log("connected to mongodb..."))
//   .catch(err=>console.error("could not conect to mongodb",err))

