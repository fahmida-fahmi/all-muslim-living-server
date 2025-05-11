const mongoose = require('mongoose')

const ignoreBioDataSchema = new mongoose.Schema({
    
    bioDataId: String,
    email:String,
    biodataType:String,
    birthYear: String,
    location:String,
}, {timestamps: true})
const IgnoreBioDatas = mongoose.model("IgnoreBiodatas", ignoreBioDataSchema)
module.exports = IgnoreBioDatas