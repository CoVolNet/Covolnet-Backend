require("dotenv").config()

const app = require("express")()
const express = require("express")
const path = require("path")
const cors = require("cors")
const database = require("./utils/database")

const validation = require("./utils/validation")

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "public")))
app.use("/volunteer", express.static(path.join(__dirname, "build")))

app.post("/volunteer", async (req, res) => {
    validation(req.body) ? res.status(200) : res.status(400).json({error:"Client side error"})
   
    console.log(req.body);
    res.status(200).json(req.body)
    try {
        const querySnapshot = await database.collection("volunteers").add(req.body)
        res.status(200).json(req.body)

    } catch (error) {
        console.error(error);
        res.status(500).json({error})
    }
})

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>console.log(`Server started on ${PORT}`))
