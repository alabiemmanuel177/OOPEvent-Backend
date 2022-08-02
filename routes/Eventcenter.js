const router = require("express").Router();
const Eventcenter = require("../models/Eventcenter");

//CREATE EVENTCENTER
router.post("/", async (req, res) => {
  const newEventCenter = new Eventcenter(req.body);
  try {
    const savedEventCenter = await newEventCenter.save();
    return res.status(200).json(savedEventCenter);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//UPDATE EVENTCENTER
router.put("/:id", async (req, res) => {
  try {
    //   const post = await Post.findById(req.params.id)
    const updatedEventCenter = await Eventcenter.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedEventCenter);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//DELETE EVENTCENTER
router.delete("/:id", async (req, res) => {
  try {
    const eventcenter = await Eventcenter.findById(req.params.id);
    await eventcenter.delete();
    return res.status(200).json("Event Center has been deleted...");
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET EVENTCENTER
router.get("/:id", async (req, res) => {
  try {
    const eventcenter = await Eventcenter.findById(req.params.id);
    return res.status(200).json(eventcenter);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET ALL EVENTCENTER
router.get("/", async (req, res) => {
  try {
    let eventcenters;
    eventcenters = await Eventcenter.find();
    return res.status(200).json(Eventcenter);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//PATCH EVENTCENTER
router.patch("/:id", async (req, res) => {
  try {
    const updatedEventCenter = await Eventcenter.findByIdAndUpdate(
      req.params.id,
      {
        $push: req.body,
      }
    );
    return res.status(200).json(updatedEventCenter);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
