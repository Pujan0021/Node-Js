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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});