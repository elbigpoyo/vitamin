const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: String,
    species: {
        name: String,
        url: String
    },
    sprites: {
        front_default: String,
        front_shiny: String,
    },
    stats: [{
        base_stat: Number,
        stat: {
            name: String
        }
    }],
    types: [{
        slot: Number,
        type: {
            name: String,
            url: String
        }
    }]
}, {
    timestamps: true  // Adds createdAt and updatedAt
});

const pokeModel = mongoose.model('Pokemon', pokemonSchema);
module.exports = pokeModel;