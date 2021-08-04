
const rocket = require("./routes/rockets");
const express = require("express");
const mongoose = require('mongoose');
const app = express()
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017', {useNewUrlParser: true, useUnifiedTopology: true,dbName: "spacexpogram"},
(err)=>{
    if(!err) console.log("Mongo DB connected");
    else throw Error("Can't connect to mongo Db");
})


app.listen( 9158 ,() => {
    console.log("server is started and runing on port 3000");
})




app.use("/rocket", rocket);