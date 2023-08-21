const mongoose = require("mongoose");

const { Schema } = mongoose;

const outfitSchema = new Schema({
  itemName: String,
  ownerName: String,
  colours: Array,
  cost: Number,
  description: String,
});

const Outfit = mongoose.model("Outfit", outfitSchema);

module.exports = Outfit;
