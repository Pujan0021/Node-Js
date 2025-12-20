let fs = require('fs');
const dotEnv = require("dotenv");
const mongoose = require("mongoose");


dotEnv.config({ path: "../config.env" });

// Connect to MongoDB
mongoose.connect(process.env.CONN_STR)
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log("Error Occurred Connecting Database:", err.message));


// Schema
let movieSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is a required Field!"], unique: true },
    duration: { type: Number },
    rating: { type: Number },
    description: { type: String, trim: true },
    directors: { type: [String] },
    images: { type: String },
    price: { type: String },
});
let Movies = mongoose.model("Movies", movieSchema);
let readFile = JSON.parse(fs.readFileSync("./products.json", 'utf-8'));
console.log(readFile)

const deleteMovies = async () => {
    try {
        await Movies.deleteMany();
        console.log("...Data SuccessFully Deleted...")

    } catch (err) {
        console.log("Error Occured ! ", err.message)

    }
    // process.exit();
}

const createMovies = async () => {
    try {
        await Movies.create(readFile);
        console.log("....Data SuccessFully Imported....")

    } catch (err) {
        console.log("Error Occured ! ", err.message)

    }
    process.exit()
}
console.log(process.env.argv)

deleteMovies();
createMovies();