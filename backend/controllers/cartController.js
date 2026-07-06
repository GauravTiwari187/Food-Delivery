import userModel from "../models/userModel.js"

// add item to user cart
const addToCart = async (req,res) =>{
   try {
     console.log("Step 1: Function started, userId:", req.body.userId);
     let userData =  await userModel.findOne({_id:req.body.userId});
     console.log("Step 2: User found:", userData);
     let cartData = await userData.cartData;
     console.log("Step 3: Cart data:", cartData);
     if(!cartData[req.body.itemId])
     {
        cartData[req.body.itemId] = 1
     }
     else{
        cartData[req.body.itemId] += 1;
     }
     console.log("Step 4: About to update DB");
     await userModel.findByIdAndUpdate(req.body.userId,{cartData});
     console.log("Step 5: DB updated successfully");
     res.json({success:true,message:"Added To Cart"});
   } catch (error) {
       console.log("ERROR:", error);
       res.json({success:false,message:"Error"})
   }
}

// remove items from user cart
const removeFromCart = async (req,res) => {
      try {
         let userData = await userModel.findById(req.body.userId)
         let cartData = await userData.cartData;
         if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
         }
         await userModel.findByIdAndUpdate(req.body.userId,{cartData});
         res.json({success:true,message:"Remove From Cart"})
      }catch (error){
          console.log(error);
          res.json({success:false,message:"Error"})
      }
}

// fetch user cart data
const getCart = async (req,res) =>{
       try{
         let userData = await userModel.findById(req.body.userId);
         let cartData = await userData.cartData;
         res.json({success:true,cartData})
       }catch(error){
         console.log(error);
         res.json({success:false,message:"Error"})
       }
}

export {addToCart,removeFromCart,getCart}