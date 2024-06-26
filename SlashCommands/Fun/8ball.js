const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('8ball')
    .setDescription('Asks the magic 8ball a question')
    .addStringOption((option)=>
      option
        .setName('question')
        .setDescription('The question to ask the magic 8ball')
        .setRequired(true)
    ),

  async execute(interaction){
    const question = interaction.options.getString('question');
    const responses = [
      'Absoulutely not',
      'Absolutely',
      'Certainly',
      'Certainly not',
      'Hell nah!',
      'Hell yeah!',
      'Idk mate',
      'Maybe',
      'Most likely',
      'Most likely not',
      'Nah',
      'No way bruv',
      'Not a clue mate',
      'Of course',
      'Of course not',
      'Possibly',
      'Probably',
      'Probably not',
      'Sure thing',
      'Without a doubt',
      'Yeah',
    ];
    const replyEmbed = {
      color: 0xff0000,
      title: '__THE MAGIC 8BALL__',
      description: `**${interaction.user.username} asked :**\t${question}\n\n**The Magic 8Ball says:**\t${responses[Math.floor(Math.random() * responses.length)]}`,
      timestamp: new Date(),
      footer: {
        icon_url: interaction.user.avatarURL(),
        text: `${interaction.user.username}`
      }
    }

    if(!question.endsWith('?')){
      interaction.reply({content: 'Please ask a question that ends with a question mark!', ephemeral: true});
      return;
    }

    interaction.reply({embeds: [replyEmbed]});
    console.log(`⚙️\t${interaction.user.username} used /8ball : '${question}'`);
  }
}
