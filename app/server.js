// discord library
const Eris = require('eris');
// which bot is our bot?
const bot = new Eris(process.env.TOKEN, {
  intents: [] // this is either empty or 0 based on bot settings
});

// debug check
bot.on('ready', () => {
    console.log('Ready!');
});

// ==== chat interaction ====

// pingpong test
bot.on('messageCreate', (msg) => {
  // msg object has .content (string) which is the actual text string
  // .channel which is where msg was posted, which has its own properties
  // .author which is the user, also an object with many properties
    if(msg.content === '!ping') {
        bot.createMessage(msg.channel.id, 'pong!');
        console.log('pinged by ', msg.author.username);
    }
});

// add key

// list keys

// return random key by player

// return random key by character


// now actually connect to disc server
bot.connect();