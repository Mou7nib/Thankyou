const mongoose = require("mongoose")
    const UsersSchema = new mongoose.Schema({
        telegramID:{
            type:BigInt,
            primaryKey:true,
            unique:true,
            allowNull:false
        },
        userName:{
            type:String
        },
        coins:{
            type:Number,
            defaultValue:0
        }
    }
)
exports = mongoose.models("user",UsersSchema);
