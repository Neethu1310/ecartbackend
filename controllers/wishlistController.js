//import wishlists
const wishlists = require('../models/wishlistSchema')

//logic for wishlists
exports.addtowishlist=async(req,res)=>{

    //get product details from request
    // req.body={
    //     id:'3',
    //     title:'hd',
    //     price:4444
    // }

    //destructure req.body
      const {id,title,price,image} = req.body

      //logic
      try{
          const item= await wishlists.findOne({id})
          if(item){
            res.status(404).json("Product already exists")
           }
          else{
            //add item to wishlists collection
            const newItem=new wishlists({id,title,price,image})
            //to store in wishlist collection 
            await newItem.save()
            //response send back to the client
            res.status(200).json("Product added to the wishlist")
          }
      }
      catch(error){
        res.status(404).json(error)
      }
}

//logic for view wishlists product details
exports.getWishlist=async(req,res)=>{
  //logic for view wishlists products details

  try{
    const allWishlists = await wishlists.find()
   res.status(200).json(allWishlists)
  }
  catch(error){
    res.status(404).json(error)
  }

  
}


//delete wishlists product details
exports.deleteWishlist=async(req,res)=>{
  //get id from the request
    const {id} = req.params

    //logic for delete wishlist product details
    try{
     const removeWishlists = await wishlists.deleteOne({id})
     //get all wishlists product after removing particular product details
     if(removeWishlists){
      const allitems = await wishlists.find()
      res.status(200).json(allitems)
     }
    //  res.status(200).json(removeWishlists)
    }
    catch(error){
      res.status(404).json(error)
    }
}