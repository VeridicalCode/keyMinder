// functions for actually making and scraping key data

// dependencies
const mongoose = require("mongoose");
const db = require("database");

// vars & initialization
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/keyMinder";

// connect to mongoose
mongoose.connect(MONGODB_URI);

/* db entry looks like:
    discordID |
    playerID |
    keyArray [ { TOON | KEYSTRING }
      { TOON | KEYSTRING } ]

    DISCORD ID is unique discord id pulled from where!?
    PLAYER is username string pulled from message props
    TOON is string provided by user, case-insensitive to minimize duplication issues
      check against current TOONs, update keystring on match, else add new row
    KEYSTRING is string provided by user, totally arbitrary
  */

// function to dump database (autorun every tuesday? WHAT ABOUT EU PLAYERS)
dumpDatabase(() => {
  db.Player.deleteMany({}, error => {
    console.log(`dumped contents of Player database`);
  });
});

// function to add new key data
// extremely catch-all (adds just key, player, overwrites key) for user-side utility
addNewKeyToPlayer((discID, playerID, toon, keystring) => {
  // check if toon exists on this server, and get the entry if so
  const current = db.Player.where("discordID" === discID )
    .where("toon" === toon );

  // if found, change player.toon.key to key
  if (current) {
    // sanity check: bail out if we don't own this character
    if (current.playerID != playerID){
      return console.log(`this isn't your character!`);
    }
    else {
      db.Player.updateOne(
        {discordID : discID, "keyArray.toon" : toon },
        {
          $set: {
            "keyArray.$.keystring" : keystring,
          }
        }
      )};
  }
  // if not found, check for player, and either add to array or create player entirely
  else {

  }
});

// function to dump the whole table in human-readable text

// function to take TOON array and return all relevant keys
{
  // (toon) =>
  // for each toon,
  // crawl table and check all player.toon against toon
  // on a positive, add player.toon.key to array
  // return array
}

// function to take PLAYER input and return all relevant keys
{
  // (player) =>
  // crawl table to find player
  // for all objects in array player, get player.toon.key
  // -> dump each iteration into an array
  // return the array
}

// function to grab random key from key array
getRandomKey((keyList) => {
  return keyList[Math.floor(Math.random() * keyList.length)]
});

// scope creep: function to search on key lvl (requires schema change)