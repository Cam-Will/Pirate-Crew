const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    pirateName: { 
        type: String,
        required: [true, "⛔Must include a Pirate!⛔"],
        validate: {
            validator: (input) => {
                return input.length >= 3;
            },
            message: (input) => `Pirate's Name ${input.value} must be at least 3 characters!👽`
        }
    },
    treasureChests: { 
        type: Number,
        required: [true, "⛔Must include a number of Treasure CHest!⛔"],
        validate: {
            validator: (input) => {
                return input >= 0;
            },
            message: (input) => `Treasure chests ${input.value} must be at greater than 0!👽`
        }
    },
    pegLeg: { 
        type: Boolean,
        required: [true, "⛔Must include a Peg Leg!⛔"],
    },
    eyePatch: { 
        type: Boolean,
        required: [true, "⛔Must include a Eye Patch!⛔"],
    },
    hookHand: { 
        type: Boolean,
        required: [true, "⛔Must include a Hook Hand!⛔"],
    },
    imageUrl: { 
        type: String,
        required: [true, "⛔Must include a image url!⛔"],
        validate: {
            validator: (input) => {
                return /.*([A-Za-z1-9]+)\.([A-Za-z1-9]+).*/.test(input);
            },
            message: (input) => `Image URL ${input.value} must be valid URL!👽`
        }
    },
    catchPhrase: {
        type: String,
        required: [true, "⛔Must include a Catch Phrase!⛔"],
        validate: {
            validator: (input) => {
                return input.length >= 3;
            },
            message: (input) => `Catch Phrase ${input.value} must be at least 3 characters!👽`
        }
    },
    position: {
        type: String,
        required: [true, "⛔Must include a Position!⛔"],
        validate: {
            validator: (input) => {
                return input.length >= 3;
            },
            message: (input) => `Position ${input.value} must be at least 3 characters!👽`
        }
    },
}, { timestamps: true });
module.exports.Pirate = mongoose.model('Pirate', PirateSchema);