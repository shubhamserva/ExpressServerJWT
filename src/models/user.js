var moongoose = require('mongoose');

const users = moongoose.Schema({
    email :{
        type: String
    },
    password:{
        type: String
    }
    
})

module.exports = moongoose.model('users',users)