const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./model/listing");  // Ensure this path is correct for your folder structure
const app = express();

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";  // Correct Mongo URL

// Connect to MongoDB
async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to DB");
    } catch (err) {
        console.log("Error connecting to DB:", err);
    }
}

main();

// Test listing endpoint
app.get("/testlisting", async (req, res) => {
    try {
        let samplelisting = new Listing({
            title: "My new villa",  // Removed extra commas
            description: "By the beach",
            price: 1200,
            location: "Calangute, Goa",  // Corrected typo from 'loction' to 'location'
            country: "India",
        });

        await samplelisting.save();  // Save the listing
        console.log("Sample listing was saved");
        res.send("Successfully testing");
    } catch (err) {
        console.log("Error in /testlisting:", err);
        res.status(500).send("Error occurred while testing");
    }
});

// Default route
app.get("/", (req, res) => {
    res.send("Hi, I am Darshana");
});

// Start the server
app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});
