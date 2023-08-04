const { v4: uuidv4 } = require("uuid")

const users = [
    {
        id: uuidv4(),
        username: "anisul islam",
        email: "anisul@gmail.com"
    },
    {
        id: uuidv4(),
        username: "hasan islam",
        email: "hasan@gmail.com"
    },
    {
        id: uuidv4(),
        username: "shahadat islam",
        email: "shahadat@gmail.com"
    },
]

module.exports = users