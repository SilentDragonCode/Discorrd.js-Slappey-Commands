const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class SnipeCommand extends BaseCommand {
  constructor() {
    super('snipe', 'utility', []);
  }

  async run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    const msg = client.snipes.get(message.channel.id);
    if (!msg) return message.channel.send('Sorry bud, there\'s nothing to snipe.');

    const snipeEmbed = new Discord.MessageEmbed()
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
        .setDescription(msg.content)

    message.channel.send(snipeEmbed);
  }
}