const { data } = require("./init/data");

async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to DB");

        const count = await Listing.countDocuments();
        if (count === 0) {
            await Listing.insertMany(data);
            console.log("Sample data inserted!");
        }

    } catch (err) {
        console.log("Error connecting to DB:", err);
    }
}
