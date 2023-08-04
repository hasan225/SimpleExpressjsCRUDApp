const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const usersRouter = require("./routes/users.route")


const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/users", usersRouter)


app.get("/", (req, res) => {
    res.sendfile(__dirname + "/index.html")
})



module.exports = app

