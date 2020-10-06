const expeess = require('express')
const app = expeess()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const bookRoute = require('./routes/books')

const MongoURL = process.env.DATABASE_URL;
const morgan = require('morgan')
const cors = require("cors");

app.use(bodyParser.json())
app.use(morgan("common"))
app.use('/api/book', bookRoute)
app.use(cors({
    origin: ["*"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "auth-token"]
}))

mongoose.connect(MongoURL, {useNewUrlParser: true, useUnifiedTopology: true},(err) => {
    if (err) throw err;
    console.log("Database Connected");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => (console.log(`Server is running on PORT ${PORT}`)))