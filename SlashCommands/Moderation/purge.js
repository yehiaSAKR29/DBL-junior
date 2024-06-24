const {SlashCommandBuilder} = require('@discordjs/builders');
const {PermissionsBitField} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('purge')
    .setDescription('Purges messages in the channel')
    .addIntegerOption((option) =>
        option
          .setName('number')
          .setDescription('Number of messages to purge')
          .setRequired(true)
    ),
  
  async execute(interaction){
    const number = interaction.options.getInteger('number');
    const channel = interaction.channel.name;

    if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
      interaction.reply({ content: "You don\'t have permissions to use this command.", ephemeral: true });
      return;
    }
    
    if(number <=0 || number > 100){
      interaction.reply({content: 'You can only purge between 1 and 100 messages!', ephemeral: true});
      return;
    }
    
    interaction.channel.bulkDelete(number);
    interaction.reply({content: `Purged ${number} messages successfully!`, ephemeral: true});
    console.log(`⚙️\t${interaction.user.username} used /purge in '${channel}' on ${number} messages`);
  }
}
