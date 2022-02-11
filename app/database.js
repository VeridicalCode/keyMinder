// functions for actually making and scraping key data

// table looks like:
//    PLAYER | TOON | KEYSTRING

  // PLAYER is username string pulled from message props
  // TOON is string provided by user, case-insensitive to minimize duplication issues
    // check against current TOONs, update keystring on match, else add new row
  // KEYSTRING is string provided by user, totally arbitrary

// function to check TOON against existing, can be used twice for dryness

// function to dump the whole table in human-readable text

// function to take TOON array and return all relevant keys

// function to take PLAYER array and return all relevant keys

// fisher-yates to shuffle an array and return random key