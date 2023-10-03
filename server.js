const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const app = express()

app.get("/", function (req, res) {
  res.send("Hello World")
})

const PORT = process.env.PORT || 8000
const MONGOURl = process.env.MONGODB_URI

mongoose
  .connect(MONGOURl)
  .then(() => {
    console.log("mongodb connected succesfully!!")

    app.listen(process.env.PORT, () => {
      console.log(`app is started on server ${process.env.PORT}`)
    })
  })
  .catch((error) => console.log(error))
