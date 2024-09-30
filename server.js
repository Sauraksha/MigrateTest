import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app=express();
dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const userS=mongoose.Schema({
    name:String
});

const user=mongoose.model("user",userS);

app.get("/",async(req,res)=>{

    await user.create({name:"sauraksha"});
    res.send(await user.find());

});

app.listen(process.env.PORT,()=>{

    console.log("running");

})

