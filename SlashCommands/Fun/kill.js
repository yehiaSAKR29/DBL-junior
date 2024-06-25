const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kill')
    .setDescription('Kills someone')
    .addUserOption((option) =>
        option
          .setName('enemy')
          .setDescription('The enemy to kill')
          .setRequired(true)
    ),

  async execute(interaction){
    const killed = interaction.options.getUser('enemy');
    const killer = interaction.user;
    const kills = [
      `**${killer} attempted to kill ${killed} but ${killed} kills him instead.**`,
      `**${killer} attempted to kill ${killed} but fails.**`,
      `**${killer} beats up ${killed} with a baseball bat to death.**`,
      `**${killer} beats up ${killed} with a frying pan to death.**`,
      `**${killer} cancels ${killed}'s life subsciption.**`,
      `**${killer} crushes ${killed}'s skull open with a rock.**`,
      `**${killer} decapitates ${killed} with a diamond sword.**`,
      `**${killer} drowns ${killed} in his very own bathtub.**`,
      `**${killer} fell in love with ${killed} then broke his heart (literally).**`,
      `**${killer} has ALT+F4'd ${killed}.exe.**`,
      `**${killer} hired me to kill ${killed}, but I don't want to.**`,
      `**${killer} hugged ${killed} too hard; He's dead now.**`,
      `**${killer} killed ${killed} after hours of torture.**`,
      `**${killer} kills ${killed} by ripping the skin off of his face.**`,
      `**${killer} killed ${killed} with kindness.**`,
      `**${killer} learns magic at Hogwarts then comes back and uses *Avada Kedavra* on ${killed}.**`,
      `**${killer} left the car window open. ${killed} dies from overheat.**`,
      `**${killer} mogs ${killed} so hard that he couldn't take it anymore and commits suicide.**`,
      `**${killer} runs ${killed} over with his Toyota.**`,
      `**${killer} shoots ${killed} in the head.**`,
      `**${killer} slips fentanyl into ${killed}'s bag. ${killed}'s mom finds it when he goes home and beats him to death.**`,
      `**${killer} slips rat poison into ${killed}'s milkshake.**`,
      `**${killer} stabs ${killed} to death.**`,
      `**${killer} straight up murders ${killed} with an axe.**`,
      `**${killer} strangles ${killed} to death.**`,
      `**${killer} told a really bad joke; ${killed} dies from cringe.**`,
      `**${killer} told a really great joke; ${killed} dies from laughter.**`,
      `**${killer} tried to kill ${killed} but slips and cracks his neck.**`,
      `**${killed} can't be killed. He's immortal.**`,
      `**${killed} decided it was a good idea to fight a bear for some reason.**`,
      `**${killed} dies after ${killer} wrote his name in the death note.**`,
      `**${killed} dies after choking on his own saliva.**`,
      `**${killed} dies after gaming for 100 hours straight.**`,
      `**${killed} dies at the hands of ${killer}.**`,
      `**${killed} dies before he can tell us what's obama's last name.**`,
      `**${killed} dies from brainrot.**`,
      `**${killed} dies from eating too much, what a fatass.**`,
      `**${killed} dies from fentanyl addiction.**`,
      `**${killed} dies from lack of friends.**`,
      `**${killed} dies from lack of maidens.**`,
      `**${killed} dies from ligma.**`,
      `**${killed} dies mysteriously after announcing he has found the cure for cancer.**`,
      `**${killed} dies of natural causes.**`,
      `**${killed} got struck by lightning.**`,
      `**${killed} mysteriously disappeared after trying to outpizza the hut.**`,
      `**${killed} was killed after ${killer} forces him to listen to Taylor Swift.**`,
      `**After a struggle ${killer} finally kills ${killed}.**`,
      `**Sorry ${killer}, I don't like killing people.**`
    ];

    if(killed.id === interaction.user.id){
      interaction.reply({content: 'Are you trying to kill yourself? Seek immediate help!', ephemeral: true});
      return;
    }

    if(killed.bot){
      interaction.reply({content: 'You can\'t kill a bot! They were never alive to begin with!', ephemeral: true});
      return;
    }

    interaction.reply(kills[Math.floor(Math.random() * kills.length)]);
    console.log(`⚙️\t${interaction.user.username} used /kill : '${killed.username}'`);
  }
}
