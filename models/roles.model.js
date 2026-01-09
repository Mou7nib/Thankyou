const mongoose = require("mongoose")

const rolesSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users.model"
    },
    name:{
            type:String,
            required:true
        },
})

module.exports = mongoose.models("Roles", rolesSchema);