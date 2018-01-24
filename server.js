const express = require("express")
const bodyParser = require("body-parser")
const port = 5000


const app = express()



// Routes


// Database configurations
var dbConfig = require("./config/database.config.js")
var mongoose = require("mongoose")


mongoose.connect(dbConfig.url, {
  useMongoClient: true
})

    // try conection
mongoose.connection.on('error', () => {
  console.log('Could not connect to DB. Exiting now...');
  process.exit()
})

mongoose.connection.once('open', ()=> {
  console.log('Successfully connected to the DB');
})
// Start Server
app.listen(port, () => {
  console.log(`We are live at port:  ${port}`);
})
