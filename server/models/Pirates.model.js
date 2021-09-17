// Import Mongoose
const mongoose = require("mongoose");

// Create the schema and validations
const PiratesSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Pirate Name must be present"],
    },
    picture: {
        type: String,
        required: [true, "Arrrr I want me picture"],
    },
    chests: {
        type: String, 
        required: [true, "I want me treasure"],
    },
    piratePhrase: {
        type: String,
        required: [true, "I must have a catchphrase!"]
    },
    crewRole: {
        type: String, 
        required: [true, "This be my crew! What shall I do?"],
    },
    pegLeg: {
        type: Boolean,
        required: [true, "Do I have a stump or not?"],
    },
    eyePatch: {
        type: Boolean,
        required: [true, "Eye Eye? Or Aye Aye? Do I have an eye?"],
    },
    hookHand: {
        type: Boolean,
        required: [true, "Have I lost me hand?"],
    }
}, {timestamps: true});

// Create the model
const Pirates = mongoose.model("Pirates", PiratesSchema)

// Export
module.exports = Pirates;