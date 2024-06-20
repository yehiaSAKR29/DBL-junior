const {BOT_TOKEN} = require("./config.json");
const {Client, IntentsBitField, Collection} = require('discord.js');
const fs = require('fs');
const path = require('path');
const client = new Client({
  intents:[
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});


//commands
const commandFolders = ['Fun', 'Info', 'Moderation', 'Utility'];
const commands = [];
client.commands = new Collection();

for(const folder of commandFolders){
  const commandFiles = fs.readdirSync(path.join(__dirname, 'SlashCommands', folder)).filter(file => file.endsWith('.js'));
  
  for (const file of commandFiles){
    const command = require(`./SlashCommands/${folder}/${file}`);
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
  }
}


//events
const eventFolders = ['Guild', 'Interactions', 'Message', 'Ready'];

for(const folder of eventFolders){
  const eventFiles = fs.readdirSync(path.join(__dirname, 'Events', folder)).filter(file => file.endsWith('.js'));
  
  for(const file of eventFiles){
    const event = require(`./Events/${folder}/${file}`);
    if(event.once){
      client.once(event.name, (...args) => event.execute(...args, commands));
    }else{
      client.on(event.name, (...args) => event.execute(...args, commands));
    }
  }
}


client.login(BOT_TOKEN);
