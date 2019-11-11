const mongoose = require("mongoose")
const {Schema} = mongoose
mongoose.connect("mongodb://127.0.0.1:27017/weixin",{useNewUrlParser:true})
let mySchema = new Schema({
    assentToken:String
})

exports.needToken = mongoose.model("Token",mySchema)