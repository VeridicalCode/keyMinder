
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    // which discord?
    discordID: String,
    // unique discord ID of player
    playerID: String,
    // key array
    keyArray: [{ toon: String, keystring: String,}],
});

// mongoose lets you just tack methods into your schema; should we put a random keygen here?
    // just like model.findRandomKey and search on this.keyArray?

// mongoose looks for lowercase plural; in the mongo database it'll want to find "players"
const Player = mongoose.model(`Player`, playerSchema);
module.exports = Player;