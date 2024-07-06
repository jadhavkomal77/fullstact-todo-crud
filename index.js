const mongoose = require("mongoose")
const exprsss = require("express")
const cors = require("cors")
require("dotenv").config()
mongoose.connect(process.env.MONGO_URL)

const app = exprsss()
app.use(exprsss.json())
app.use(cors())

app.use("/api/todos", require("./route/todo.route"))

app.use(("*"), (req, res) => {
    res.status(404).json({ message: "Resoures not found" })
})

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message || "Somthing Went Wrong" })
})

mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED");
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))
})


