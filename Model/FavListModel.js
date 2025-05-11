const mongoose = require('mongoose')

const favListBioDataSchema = new mongoose.Schema({
    
    bioDataId: String,
    email:String,
    biodataType:String,
    birthYear: String,

}, {timestamps: true})
const FavListBiodata = mongoose.model("FavLists", favListBioDataSchema)
module.exports = FavListBiodata