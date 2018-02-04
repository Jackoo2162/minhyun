const Discord = require('discord.js');

const bot = new Discord.Client();
  var servers = {}; var queue = 


bot.on('message', message => {
  if (message.content === 'wot') {
   // message.reply('pong');
    message.channel.sendMessage('Because you are beautiful more than anyone else!');
  }
});

bot.on('message', message => {
  if (message.content === 'WOT') {
   // message.reply('pong');
    message.channel.sendMessage('I hate to feel like I am finally feeling that way');
  }
});

bot.on('message', message => {
  if (message.content === 'High') {
   // message.reply('pong');
    message.channel.sendMessage('In this moment where I gradually feel more of both of our lips, it is so hot');
  }
});

bot.on('message', message => {
  if (message.content === 'hi') {
   // message.reply('pong');
    message.channel.sendMessage('You make me feel so high. I am so crazy in the moment you looked at me.');
  }
});

bot.on('message', message => {
  if (message.content === 'bye') {
   // message.reply('pong');
    message.channel.sendMessage('Make me feel so high michigesseo nal meomchul sun eopseo');
  }
});


bot.on('message', message => {
  if (message.content === 'Bye') {
   // message.reply('pong');
    message.channel.sendMessage('I wanna touch.');
  }
});

bot.on('message', message => {
  if (message.content === 'cheese') {
   // message.reply('pong');
    message.channel.sendMessage('This is the beginning, it is time to light. I awaken the light inside of me.');
  }
});

bot.on('message', message => {
  if (message.content === 'Lol') {
   // message.reply('pong');
    message.channel.sendMessage('We get ready to run,yeah, when the flames are burning up,ooh.');
  }
});

bot.on('message', message => {
  if (message.content === 'Hello') {
   // message.reply('pong');
    message.channel.sendMessage('Now we are getting up.');
  }
});

bot.on('message', message => {
  if (message.content === 'you') {
   // message.reply('pong');
    message.channel.sendMessage('Even if the darkness falls again and a higher wall blocks my ways,');
  }
});

bot.on('message', message => {
  if (message.content === 'burn it up') {
   // message.reply('pong');
    message.channel.sendMessage('Wuh uhh uhh uh uh uh');
  }
});


bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on('message', message => {
  if (message.content === 'YOU CANT LIVE WITHOUT SANA') {
   // message.reply('pong');
    message.channel.sendMessage('YOU CANT LIVE WITHOUT AJI 3');
  }
});


bot.on("ready", () => {
  bot.user.setPresence({game: {name:"SINGING FOR AJI 3"}})
  console.log('I have jackoo: {SERVERNAME}')
})

bot.on("ready", function() {
  console.log("Ready");
});



bot.on('ready', ()=>{
  console.log(`Logged in as ${bot.user.tag}!`);
  voiceChannel = bot.guilds.find('name', 'DREAMENERG3T1CER').channels.find('name', 'MINHYUN');
  voiceChannel.join().then(()=>{
      console.log(`Connected to ${voiceChannel.name}!`);
  });
});


bot.on('message', message => {
  if (message.content === '?fruits') {
      message.react('🍎')
          .then(() => message.react('🍊'))
          .then(() => message.react('🍇'))
          .catch(() => console.error('One of the emojis failed to react.'));
  }
});

bot.on('message', message=>{
  if (message.content.startsWith('jackoo')){
    var guild = bot.guilds.find('name', 'DREAMENERG3T1CER'); var emoji = guild.emojis.find('name', 'PervertedRM');
      message.react(emoji);
  }
});

bot.on('message', message=>{
  if (message.content.startsWith('Hi')){
      message.author.send('SLIDE INTO MY DMS....');
  }
});




bot.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});





bot.login('NDA3ODc3MzA1NzEzNTU3NTA1.DVH5LQ.4_Vw4iY_YtnYsHPdgRIWFh9gd_0');
