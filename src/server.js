require('dotenv').config({ path: `./config/.env.${process.env.NODE_ENV}` })

const express = require("express");
var cors = require('cors');
const { router } = require("./route/apiRoute");

const port = process.env.PORT;
const app = express();

app.use(cors())
app.use(express.json());
app.use(router);


app.listen(port, (req, res) => {
  console.log(`Server is up and running on port ${port}`)
})