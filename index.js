
require("dotenv").config()
const app = require("./app")

const PORT = process.env.PORT 

app.use("*", (req, res, next) => {
    res.status(404).send("Wrong destination 404 | not found")
})
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})