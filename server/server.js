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

app.get("/outfits", async (request, response) => {
  try {
    const allOutfits = await Outfit.find(request.query);
    response.status(200).json(allOutfits);
  } catch (error) {
    response.status(404).json(error);
  }
});

app.get("/outfits/:id", async (request, response) => {
  try {
    const outfitById = await Outfit.find({
      _id: request.params.id,
    });
    response.status(200).json(outfitById);
  } catch (error) {
    response.status(404).json(error);
  }
});

app.post("/outfits", async (request, response) => {
  try {
    const newOutfit = await Outfit.create(request.body);
    response.status(204).json(newOutfit);
  } catch (error) {
    response.status(404).json(error);
  }
});

app.put("/outfits/:id", async (request, response) => {
  try {
    await Outfit.findByIdAndUpdate(request.params.id, request.body);
    response.status(200).send();
  } catch (error) {
    response.send(error);
  }
});

app.delete("/outfits/:id", async (request, response) => {
  try {
    const deletedOutfit = await Outfit.findByIdAndDelete(request.params.id);
    response.status(200).send(deletedOutfit);
  } catch (error) {
    response.status(500).json(error);
  }
});

app.listen(PORT, () => console.log(`app is listening on port: ${PORT}`));
