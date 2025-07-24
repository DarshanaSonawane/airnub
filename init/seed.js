const mongoose = require("mongoose");
const Listing = require("../model/listing");
const { data } = require("./data"); // Make sure data.js is in the same folder

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");

    await Listing.deleteMany({});
    console.log("Old listings removed");

    await Listing.insertMany(data);
    console.log("Sample listings inserted");

    mongoose.connection.close();
    console.log("Connection closed");
  } catch (err) {
    console.error("Error seeding the database:", err);
  }
}

main();
