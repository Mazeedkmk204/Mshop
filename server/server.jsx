const bodyParser = require("body-parser");

const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv".config())
const port = process.env.PORT
const Stripe = require("stripe")(process.env.STRIPE_KEY);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.send("hello world!")
})
app.post("/pay,async(ew)")
app.listen(port, () => {
    console.log(`server is running on Port ${port}`);
})