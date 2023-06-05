const path = require("path");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/Auth");
const userRoute = require("./routes/User");
const adminRoute = require("./routes/Admin");
const bookingRoute = require("./routes/Booking");
const eventcenterRoute = require("./routes/Eventcenter");
const bodyParser = require("body-parser");

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 7150;

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/admins", adminRoute);
app.use("/api/bookings", bookingRoute);
app.use("/api/eventcenters", eventcenterRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Backend is running on port ${port}.`);
});
