module.exports = {
  name: 'interactionCreate',
  async execute(interaction){
    if(!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);
    if(!command) return;

    try{
      await command.execute(interaction);
    }catch(error){
      console.log(`❌\tThere was an error: ${error}`);
      await interaction.reply({content: 'An error occured while executing this command!', ephemeral: true});
    };
  }
}
