const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        default:"https://images.unsplash.com/photo-1751378639381-e482ae167e39?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
required:true,
set:(v)=>v===""? "https://images.unsplash.com/photo-1751378639381-e482ae167e39?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":v,
    },
    description:String,
    image:String,
    price:Number,
    location:String,
    country:String,

});
const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;




 