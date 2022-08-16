const path = require("path");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const adminRoute = require("./routes/admin");
const bookingRoute = require("./routes/booking");
const eventcenterRoute = require("./routes/eventcenter");
const bodyParser = require("body-parser");

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 7000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/Auth", authRoute);
app.use("/api/Users", userRoute);
app.use("/api/Admins", adminRoute);
app.use("/api/Bookings", bookingRoute);
app.use("/api/Eventcenters", eventcenterRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Backend is running on port ${port}.`);
});
