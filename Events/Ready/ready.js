const {BOT_TOKEN, GUILD_ID, CLIENT_ID} = require("../../config.json");
const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v10');
const { ActivityType } = require('discord.js'); 
module.exports = {
  name: 'ready',
  once: true,
  execute(client, commands){
    const rest = new REST({version: '10'}).setToken(BOT_TOKEN);
  
  (async () =>{
    try{
      await rest.put(
        Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
        {body: commands}
      );
      console.log(`✅\t${client.user.username} is online.`);
      console.log(`✅\t${commands.length} Slash commands registered succesfully.`);
      console.log("----------------------------------------------------------------");
    }catch(error){
      console.log`❌\tThere was an error: ${error}`;
    };
  })();
  
  client.user.setActivity({name: 'Chess 2', type: ActivityType.Playing});
  }
}
