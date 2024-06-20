const {RULES_CHANNEL, ASSISTANCE_CHANNEL, WELCOME_CHANNEL, WELCOME_ROLE_ID} = require("./config.json");
module.exports = {
  name: 'guildMemberAdd',
  async execute(member){
    const rulesChannel = RULES_CHANNEL;
    const assistanceChannel = ASSISTANCE_CHANNEL;
    const welcomeChannel = WELCOME_CHANNEL;
    const roleID = WELCOME_ROLE_ID;
    
    const role = member.guild.roles.cache.get(roleID);
    const channel = member.guild.channels.cache.get(welcomeChannel);

    if (!role) {
      console.error(`❌\tRole with ID ${roleID} was not found!`);
      return;
    }
    if (!channel) {
      console.error(`❌\tChannel with ID ${welcomeChannel} was not found!`);
      return;
    }
    
    const welcomeEmbed = {
      color: 0xff0000,
      description: `Hello ${member.toString()}, welcome to **${member.guild.name}**!\n\nPlease read our rules in <#${rulesChannel}> and head to <#${assistanceChannel}> if you need any additional help. We hope you enjoy your stay!`,
      timestamp: new Date(),
      footer: {
        icon_url: member.guild.iconURL(),
        text: member.guild.name
      }
    };

    member.roles.add(role);
    channel.send({embeds: [welcomeEmbed]});
    console.log(`👋\t${member.user.tag} has joined the server.`);
  }
}
