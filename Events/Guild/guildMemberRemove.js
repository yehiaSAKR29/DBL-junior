const {GOODBYE_CHANNEL} = require("../../config.json");
module.exports = {
  name: 'guildMemberRemove',
  async execute(member){
    const goodbyeChannel = GOODBYE_CHANNEL;
    const channel = member.guild.channels.cache.get(goodbyeChannel);
    
    if (!channel) {
      console.error(`❌\tChannel with ID ${goodbyeChannel} was not found!`);
      return;
    }

    channel.send(`Goodbye **${member.user.tag}**! We hope to never see you again.`);
    console.log(`👋\t${member.user.tag} has left the server.`);
  }
}
