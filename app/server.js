// functions for actually making and scraping key data

// table looks like:
//    PLAYER | TOON | KEYSTRING

  // PLAYER is username string pulled from message props
  // TOON is string provided by user, case-insensitive to minimize duplication issues
    // check against current TOONs, update keystring on match, else add new row
  // KEYSTRING is string provided by user, totally arbitrary

// function to check TOON against existing, can be used twice for dryness
{
  // (toon) =>
  // crawl table and check all player.toon against toon
}

// function to add new key data
{
  // (player, toon, key) =>
  // crawl table to find player
  // check all player.toon against toon
  // if found, change player.toon.key to key
  // if not found, add toon.key to player
}

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
function getRandomKey(keyList){
  return keyList[Math.floor(Math.random() * keyList.length)]
};