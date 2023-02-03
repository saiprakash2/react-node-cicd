import express from "express";
const app =  express();

app.get('/names', (req,res)=>{
    res.send("Sai");
});

app.listen(5000, ()=> {
    console.log("Server is running on port: 5000");
});