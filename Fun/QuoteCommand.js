const BaseCommand = require('../../utils/structures/BaseCommand');

const fetch = require('node-fetch');

module.exports = class FortuneCommand extends BaseCommand {
  constructor() {
    super('quote', 'fun', [], false, 'Gives you a quote.');
  }

  run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    fetch('http://yerkee.com/api/fortune')
    .then(res => res.json())
    .then(json => message.reply(json.fortune))
    .catch(err => {
        message.channel.send('We could not find you a quote :confused:');
        return console.error(err);
    });
  }
}