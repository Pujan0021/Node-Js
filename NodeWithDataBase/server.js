// const app = require('./app');
// const dotenv = require('dotenv');
// const mongoose = require("mongoose");

// dotenv.config({ path: '../config.env' });

// console.log("CONN_STR:", process.env.CONN_STR); // Debug check

// mongoose.connect(process.env.CONN_STR)
//     .then(() => {
//         console.log("DB successfully connected");
//     })
//     .catch((err) => {
//         console.error("DB connection failed:", err);
//     });


// let movieSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, "Name is a required Field!"],
//         unique: true
//     },
//     duration: {
//         type: Number,
//         required: [true, "Duration is a required Field!"]
//     },
//     rating: {
//         type: Number,

//     },
//     description: {
//         type: String,

//     }
// })
// const Movie = mongoose.model("Movie", movieSchema);

// const testMovie = new Movie({
//     name: "Ravanaa",
//     duration: 2300,
//     rating: 4,
//     description: "A horror movie. Restricted for under age"
// })
// testMovie.save().then(doc => console.log(doc)).catch(err => console.log(err, "Error Occured while saving a movie in DB"));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


const express = require("express");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");

dotEnv.config({ path: "../config.env" });

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.CONN_STR)
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log("Error Occurred Connecting Database:", err.message));

// Schema
let movieSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is a required Field!"] },
    duration: { type: Number, required: [true, "Duration is a required Field!"] },
    rating: Number,
    description: String
});

let Movies = mongoose.model("Movie", movieSchema);

// Routes
app.get("/api/getMovies", async (req, res) => {
    try {
        let getAllMovies = await Movies.find();
        res.status(200).json({ status: "success", data: { getAllMovies } });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err.message });
    }
});
app.get("/api/Movies/:id", async (req, res) => {

    // console.log(id);
    // console.log(req.params.id)

    try {
        let getAllMovies = await Movies.find({ _id: req.params.id });
        res.status(200).json({ status: "success", data: { getAllMovies } });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err.message });
    }
});

app.post("/api/getMovies", async (req, res) => {
    try {
        let movie = await Movies.create(req.body);
        res.status(201).json({ status: "success", data: { movie } });
    } catch (err) {
        res.status(400).json({ status: "fail", message: err.message });
    }
});

app.patch("/api/:id", async (req, res) => {
    let { id } = req.params;
    console.log(req.params)
    console.log(id)

    try {
        let updateMovie = await Movies.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        res.status(200).json({
            status: "success",
            data: updateMovie
        })
    } catch (err) {
        res.status(400).json({ status: "fail", message: err.message });

    }
})

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});
