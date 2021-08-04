
const mongoose = require("mongoose");

const RocketSchema = new mongoose.Schema({
    name: String,
    launchYear: String,
    succussLaunch: Boolean,
    successLanding:Boolean,
    imgPath: String
});

const Rocket = new mongoose.model("Rockets",RocketSchema )

module.exports = Rocket;