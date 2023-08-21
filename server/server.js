const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();

const Outfit = require("./models/Outfits"); //check if it needs a dot
mongoose.connect(process.env.DATABASE_URL);

app.use(cors());
app.use(bp.json());

app.get("/", (request, response) => {
  response.status(200).json("root route testing message");
});

app.listen(PORT, () => console.log(`app is listening on port: ${PORT}`));

// mongoDB cluster password: DkkyAVlzJTOzDezP

// connection string: mongodb+srv://franhhitchcock:<password>@outfitagencycluster.fgt2oo0.mongodb.net/
