const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
    {
        bookingID: {
            type: String,
            required: true,
            unique: true
        },
        desc: {
            type: String,
            required: true,
            unique: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
            default: "pending",
        },
        dateofbooking: {
            type: String,
            required: true,
        },
        dateofevent: {
            type: String,
            required: true,
        },
        timeofevent: {
            type: String,
            required: true,
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema)