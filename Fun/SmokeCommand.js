const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SmokeCommand extends BaseCommand {
  constructor() {
    super('smoke', 'fun', []);
  }

  run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    message.channel.send('**BISSSSHES IM SMOKING**').then(async msg => {
      setTimeout(() => {
          msg.edit('🚬');
      }, 500);
      setTimeout(() => {
          msg.edit('🚬 ☁ ');
      }, 1000);
      setTimeout(() => {
          msg.edit('🚬 ☁☁ ');
      }, 1500);
      setTimeout(() => {
          msg.edit('🚬 ☁☁☁ ');
      }, 2000);
      setTimeout(() => {
          msg.edit('🚬 ☁☁');
      }, 2500);
      setTimeout(() => {
          msg.edit('🚬 ☁');
      }, 3000);
      setTimeout(() => {
          msg.edit('🚬 ');
      }, 3500);
      setTimeout(() => {
          msg.edit(`Finished smoking`);
      }, 4000);
  });
  }
}