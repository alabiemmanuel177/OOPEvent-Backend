const router = require("express").Router();
const Booking = require("../models/Booking");

//CREATE BOOKING
router.post("/", async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    return res.status(200).json(savedBooking);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//UPDATE BOOKING
router.put("/:id", async (req, res) => {
  try {
    //   const post = await Post.findById(req.params.id)
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedBooking);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//DELETE BOOKING
router.delete("/:id", async (req, res) => {
  try {
    const booking = await Boooking.findById(req.params.id);
    await booking.delete();
    return res.status(200).json("Booking has been deleted...");
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET BOOKING
router.get("/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    return res.status(200).json(booking);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET ALL BOOKING
router.get("/", async (req, res) => {
  try {
    let bookings;
    bookings = await Booking.find();
    return res.status(200).json(bookings);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//PATCH BOOKING
router.patch("/:id", async (req, res) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, {
      $push: req.body,
    });
    return res.status(200).json(updatedBooking);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
