const express = require("express");
const router = new express.Router();

const PlayerRanking = require("../models/players.js");


router.get("/player", async(req,res) => {
    try{
        const players = await PlayerRanking.find({}).sort({"ranking":1});
        res.status(200).send(players);
    }catch(e){
        res.status(404).send(e);
    }
});

router.get("/player/:id" , async(req,res) => {
    try{
        const _id = req.params.id;
        const player = await PlayerRanking.findById(_id);
        res.status(200).send(player);
    }catch(e){
        res.status(404).send(e);
    }
})

router.post("/player" , async(req,res) => {
    try{
        const player = new PlayerRanking(req.body);
        const result = await player.save();
        res.status(201).send(result);
    }catch(e){
        res.status(400).send(e);
    };
});

router.patch("/player/:id", async(req,res) => {
    try{
        const _id = req.params.id;
        const player = await PlayerRanking.findByIdAndDelete(_id);
        res.status(200).send(player);
    }catch(e){
        res.status(500).send(e);
    }
})

router.delete("/player/:id", async(req,res) => {
    try{
        const _id = req.params.id;
        const player = await PlayerRanking.findByIdAndDelete(_id , req.body , {new :true});
        res.status(200).send(player);
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;
