const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('poll')
    .setDescription('Creates a poll')
    .addStringOption((option) =>
      option
        .setName('topic')
        .setDescription('The topic of the poll')
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName('choice1')
        .setDescription('The first choice')
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName('choice2')
        .setDescription('The second choice')
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName('choice3')
        .setDescription('The third choice')
    )
    .addStringOption((option) =>
      option
        .setName('choice4')
        .setDescription('The fourth choice')
    )
    .addStringOption((option) =>
      option
        .setName('choice5')
        .setDescription('The fifth choice')
    ),

  async execute(interaction){
    const topic = interaction.options.getString('topic').toUpperCase();
    const choices = [
      interaction.options.getString('choice1'),
      interaction.options.getString('choice2'),
      interaction.options.getString('choice3'),
      interaction.options.getString('choice4'),
      interaction.options.getString('choice5')
    ].filter(Boolean);

    const emojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣'];

    const pollEmbed = {
      color: 0xff0000,
      title: `${topic}`,
      description: `${choices.map((choice, index) => `${emojis[index]} ${choice}`).join('\n\n')}`,
      timestamp: new Date(),
      footer: {
        icon_url: interaction.user.avatarURL(),
        text: `${interaction.user.username}`
      }
    };
    
    interaction.reply({content: 'Your poll has been created successfully!', ephemeral: true});
    const pollMessage = await interaction.channel.send({ embeds: [pollEmbed]});
    for (let i = 0; i < choices.length; i++){
      await pollMessage.react(emojis[i]);
    }
    console.log(`⚙️\t${interaction.user.username} used /poll on '${topic}'`);
  }
}
