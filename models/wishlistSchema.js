//import mongoose 
const mongoose=require('mongoose');

//define schema for wishlist collection to store data
const wishlistSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
    },
    title:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
     image:{
        type:String,
        required:true,
    },
     
})


//create a model to store wishlists
const wishlists = new mongoose.model('wishlists',wishlistSchema )

//export the model
module.exports = wishlists