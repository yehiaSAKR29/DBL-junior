const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Shows a list of all the commands'),

  async execute(interaction){
    const helpEmbed = {
      color: 0xff0000,
      title: '__COMMANDS LIST__',
      description: '**/coinflip**\nFlips a coin\n\n**/poll**\nCreates a poll\n\n**/rps**\nChallenges someone to a duel of rock paper scissors\n\n**/say**\nSays something',
      timestamp: new Date(),
      footer: {
        icon_url: interaction.user.avatarURL(),
        text: `${interaction.user.username}`
      }
    };

    interaction.reply({embeds: [helpEmbed]});
    console.log(`⚙️\t${interaction.user.username} used /help`);
  }
}
