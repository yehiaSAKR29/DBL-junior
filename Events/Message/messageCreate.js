module.exports = {
  name: 'messageCreate',
  async execute(message){
    if(message.author.bot){
      return;
    }
    const content = message.content.toLowerCase();

    if((content.includes('hello') || content.includes('hey') || content.includes('hihi')) && !content.includes('they')){
      message.reply('Hello there mate!');
    }
    if((content.includes('cat') || content.includes('kitten') || content.includes('kitty')) && !content.includes('catch')){
      message.reply('Meow!');
    }
    if((content.includes('duck'))){
      message.reply('Quack!');
    }
  }
}
