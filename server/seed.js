const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Outfit = require("./models/Outfits"); // check if it needs a dot

async function seed() {
  await Outfit.create({
    itemName: "party dress",
    ownerName: "Sally",
    colours: ["red", "orange", "black"],
    cost: 5,
    description:
      "Size 10. 100% silk long shift dress in warm colours. Cold shoulder, split skirt.",
  });

  await Outfit.create({
    itemName: "suit",
    ownerName: "Harry",
    colours: ["midnight blue"],
    cost: 7,
    description:
      "Large, men's suit for formal occasions including weddings. Modern cut. As new.",
  });

  console.log("seed success");
  mongoose.disconnect();
}

seed();
