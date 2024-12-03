require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const carRoutes = require("./routes/carRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
connectDB();
const app = express();
const cors = require('cors');

app.use(cors());

// middleware
app.use(express.json());

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/reviews", reviewRoutes);

// Set up the server to listen on a port
const PORT = process.env.PORT || 5020;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
