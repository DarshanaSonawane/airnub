const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./model/listing");  // Ensure this path is correct for your folder structure
const app = express();
const path = require("path");
const ejs = require('ejs');
const { request } = require("http");
const method_override=require("method-override");
const ejsMate=require("ejs-mate");


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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended:true}));
app.use(method_override("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

// Index route

app.get("/listings", async (req, res) => {
    try {
        const allListings = await Listing.find({});
        console.log(allListings);  // Log to check data
        res.render("listings/index", { allListings });
    } catch (err) {
        console.error("Error fetching listings:", err);
        res.status(500).send("Error fetching listings");
    }
});

app.get("/listings/new",async(req,res)=>{
res.render("listings/new");
});

//create route

app.post("/listings",async(req,res)=>{
    let listing=req.body;
    console.log(listing);
});

app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit", { listing });
});

//upda
// Update route
app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;
    
    // Use findByIdAndUpdate to update the listing directly
    await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });
    
    // After updating, redirect to the show page for that listing
    res.redirect(`/listings/${id}`);
});

// DELETE route
app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;
    try {
        const deletedListing = await Listing.findByIdAndDelete(id);
        console.log("Deleted listing:", deletedListing);
        res.redirect("/listings");
    } catch (err) {
        console.error("Error deleting listing:", err);
        res.status(500).send("Error deleting listing");
    }
});

//show route

app.get("/listings/:id",async(req,res)=>{
    let {id}=req.params;
  const listing =await Listing.findById(id);
  res.render("listings/show",{listing});
});

//new route


// Default route
app.get("/", (req, res) => {
    res.send("Hi, I am Darshana");
});

// Start the server
app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});
