import express from 'express'
import { configDotenv } from 'dotenv'

configDotenv()

const app = express()
const port = process.env.PORT

app.listen(port, () => {
    console.log("Service is running on port " + port)
})

app.get("/", (req, res) => {
    res.send("Happiness")
})