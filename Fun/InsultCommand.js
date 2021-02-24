const BaseCommand = require('../../utils/structures/BaseCommand');

const fetch = require('node-fetch');
const { Guild } = require('discord.js');

module.exports = class InsultCommand extends BaseCommand {
  constructor() {
    super('insult', 'fun', ['burn'], false, 'Gives you an insult or insults somebody else.');
  }

  run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    let tag;
    if (args[0] && args[0].includes('@')) {
      tag = args[0];
    } else {
      tag = '';
    }
    fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
      .then(res => res.json())
      .then(json => message.channel.send(`${tag} :fire: ${json.insult.replace('&quot;', '"')}`))
      .catch(err => {
          message.channel.send('We could not find you an evil insult :confused:\nIf you think you have found a bug or glitch, please report it on the offical Frodo discord: https://discord.gg/ApvUar6');
          return console.error(err);
      });
  }
}