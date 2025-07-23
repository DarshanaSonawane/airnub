
const mongoose=require("mongoose");
const initdata=require("./data.js");
const Listing=require("../model/listing.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";  // Correct Mongo URL

main().
then(()=>{
    console.log("connected to db ");
}).catch((err)=>{
    console.log(err);
});

// Connect to MongoDB
async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to DB");
    } catch (err) {
        console.log("Error connecting to DB:", err);
    }
}

const initDB=async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initdata.data);
    console.log("data was initliazed");
}

initDB();