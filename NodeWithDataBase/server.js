const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require("mongoose");

dotenv.config({ path: '../config.env' });

console.log("CONN_STR:", process.env.CONN_STR); // Debug check

mongoose.connect(process.env.CONN_STR)
    .then(() => {
        console.log("DB successfully connected");
    })
    .catch((err) => {
        console.error("DB connection failed:", err);
    });


let movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is a required Field!"],
        unique: true
    },
    duration: {
        type: Number,
        required: [true, "Duration is a required Field!"]
    },
    rating: {
        type: Number,

    },
    description: {
        type: String,

    }
})
const Movie = mongoose.model("Movie", movieSchema);

const testMovie = new Movie({
    name: "Ravanaa",
    duration: 2300,
    rating: 4,
    description: "A horror movie. Restricted for under age"
})
testMovie.save().then(doc => console.log(doc)).catch(err => console.log(err, "Error Occured while saving a movie in DB"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});