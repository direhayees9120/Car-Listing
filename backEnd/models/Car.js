const mongoose = require("mongoose");
const CarSchema = new mongoose.Schema({
  maker: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  mileage: { type: Number },
  condition: { type: String, enum: ["New", "Used"], default: "used" },
  pictures: [String],
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Car", CarSchema);
