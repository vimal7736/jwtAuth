const mongoose = require('mongoose');


const mongo = process.env.mongo

mongoose.connect(mongo)
.then(()=>{
console.log('MongoDB connected');

}).catch((err)=>{
    console.log('MongoDb conn error' ,err);
    
})