const  mongoose = require('mongoose')

require('dotenv').config()

exports.connect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/otp-verification-project", {
            useNewUrlParser: true,
            useUnifiedTopology : true
    }).then(()=>console.log("DB Connected Successfully✅"))
    .catch((error)=>{ 
        console.log("this error occured"+ error)
        process.exit(1)
    })
}