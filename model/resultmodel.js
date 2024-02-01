const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    s1:{
        type:Number
    },
    s2:{
        type:Number
    },
    s3:{  
        type:Number   
     },
    s4:{  
        type:Number    
    },
    s5:{  
        type:Number
    },
    total:{
        type:Number
    },
    per:{
        type:Number
    }
});

module.exports= mongoose.model('result',resultSchema);