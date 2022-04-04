// discord library
const Discord = require('discord.js');
// which bot is our bot?
const bot = new Discord.Client();
const prefix = '!';

// debug check
bot.once('ready', () => {
    console.log('Ready!');
});

// ==== chat interaction ====

// pingpong test
bot.on('message', msg => {
  // msg is an object, props include .channel, 
  if(msg.content === '!ping') {
    msg.channel.send('Pong.');
  }
});

// parse chat commands
bot.on('message', msg => {
  // ignore self and anything that isn't a command
  if(!msg.content.startsWith(prefix)
  || msg.author.bot) {
    return;
  }
  // trim message string into an array of arguments
  const args = msg.content.slice(prefix.length).trim().split(' ');
  const argsArray = args.shift().toLowerCase();

  // no arguments
  if (argsArray === prefix){
    return msg.channel.send(`KeyMinder: \n"add [character] [key]" to add a key`);
  };

  // add keys
  else if (argsArray[0] = 'add'){

  };

  // list keys
  else if (argsArray[0] = 'list'){

  };
  // return random key by players
  else if (argsArray[0] = 'player-keys'){

  };

  // return random key by characters
  else if (argsArray[0] = 'character-keys'){

  };

});



// now actually connect to disc server
bot.login(process.env.TOKEN);