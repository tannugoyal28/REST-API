const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true,
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
        default:"100 meters"
    }
})

//we are creating a new collection
const PlayerRanking = new mongoose.model("PlayerRanking", playerSchema);

module.exports = PlayerRanking;