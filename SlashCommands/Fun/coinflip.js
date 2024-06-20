const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('coinflip')
    .setDescription('Flips a coin'),
  
  async execute(interaction){
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

    interaction.reply(`${result}!`);
    console.log(`⚙️\t${interaction.user.username} used /coinflip`);
  }
}
