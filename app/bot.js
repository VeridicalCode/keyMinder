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

  if (argsArray === prefix){
    // no command; give the player instructions
    return msg.channel.send(`KeyMinder: \n"add [character] [key]" to add a key`);
  }
  // if we get here, we have something in the format of, at the very least, [prefix, argument1]
  switch (argsArray[1]) {
      
    case `add` :
      return msg.channel.send(`Keyminder: added [key] to [user]`);
    
    case `list` :
      return msg.channel.send(`Keyminder: \n [list all keys]`);
    
    case `player-keys` :
      return msg.channel.send(`Keyminder found key [key] for [players]`);

    case `character-keys` :
      return msg.channel.send(`Keyminder found key [key] for [characters]`);
  };
});



// now actually connect to disc server
bot.login(process.env.TOKEN);