const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('say')
    .setDescription('Says something')
    .addStringOption((option) =>
        option
          .setName('message')
          .setDescription('The message to say')
          .setRequired(true)
    ),

  async execute(interaction){
    const message = interaction.options.getString('message');

    interaction.reply({content: 'Your message has been sent successfully!', ephemeral: true});
    interaction.channel.send(`${message}`);
    console.log(`⚙️\t${interaction.user.username} used /say to send '${message}'`);
  }
}
