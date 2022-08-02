const mongoose = require("mongoose");

const EventCenterSchema = new mongoose.Schema(
    {
        eventcentername: {
            type: String,
            required: true,
            unique: true
        },
        location: {
            type: String,
            required: true,
            unique: true
        },
        capacity: {
            type: Number,
            required: true,
        }

    },
    { timestamps: true }
);

module.exports = mongoose.model("EventCenter", EventCenterSchema)