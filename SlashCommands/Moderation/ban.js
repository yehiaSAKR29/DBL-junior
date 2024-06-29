const {SlashCommandBuilder} = require('@discordjs/builders');
const {PermissionsBitField} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Bans someone from this server')
    .addUserOption((option) =>
      option
        .setName('user')
        .setDescription('The user to ban')
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName('reason')
        .setDescription('The reason for the ban')
        .setRequired(true)
    ),

  async execute(interaction){
    const target = await interaction.guild.members.fetch(interaction.options.getUser('user').id);
    const reason = interaction.options.getString('reason');

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)){
      interaction.reply({ content: "You don't have permissions to use this command.", ephemeral: true});
      return;
    }
    if(!target){
      interaction.reply({ content: "This user isn't currently in this server.", ephemeral: true});
      return;
    }
    if(target.id === interaction.guild.ownerId){
      interaction.reply({ content: "Are you seriously trying to ban the server owner?", ephemeral: true});
      return;
    }
    if(target.user.bot){
      interaction.reply({ content: "Are you seriously trying to ban a cute little bot?", ephemeral: true});
      return;
    }
    if(target.id === interaction.user.id){
      interaction.reply({ content: "Are you seriously trying to ban yourself?, what an idiot", ephemeral: true});
      return;
    }
    if(target.permissions.has(PermissionsBitField.Flags.Administrator) || target.permissions.has(PermissionsBitField.Flags.BanMembers)){
      interaction.reply({ content: "You can't ban a moderator!", ephemeral: true});
      return;
    }

    const banEmbed = {
      color: 0xff0000,
      title: '__USER BANNED__',
      description: `**User : **\t${target.user.toString()}\n**Reason : **\t${reason}`,
      timestamp: new Date(),
        footer: {
          icon_url: interaction.user.avatarURL(),
          text: `${interaction.user.username}`
        }
    }

    target.ban({reason: reason});
    interaction.channel.send({embeds: [banEmbed]});
    console.log(`⚙️\t${interaction.user.username} used /ban : '${target.user.username}'`);
  }
}
