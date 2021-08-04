
const express = require("express");
const Rocket = require("../models/Rocket");

const router = express.Router();

router.get("/", async(req,res) =>{
    const foundRockets = await Rocket.find({})

    res.status(200);
    res.send(foundRockets);
    res.end();

});

router.post("/add", async(req,res) =>{
    const { name, launchYear, succussLaunch, successLanding, imgPath} = req.body
    const newRocket = new Rocket({
        name, launchYear, succussLaunch, successLanding, imgPath
    })

    newRocket.save(err =>{
        if(!err){
        
           res.send("Rocket added succesfully");
        } else {
            res.status(400);
            res.send("Can't save doc")
        }
        });

});

router.get("/search", async(req,res) =>{
    
    const searchRocket = req.query.name;
      
    const foundRockets = await Rocket.find({name:searchRocket});
    res.send(foundRockets);
    

});

router.delete("/delete", async (req,res)=> {
    try {
        const removeRocketById = req.body.id;
        const removedRocket = await Rocket.deleteOne({
        _id: removeRocketById

    })
    res.send("Data removed succesfully");
        
    } catch (error) {
        
        res.send("Rocket not deleted");
    }

});
module.exports = router;
