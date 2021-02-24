const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ServerCommand extends BaseCommand {
  constructor() {
    super('server', 'utility', ['info'], true, 'Sends server info.', false);
  }

  run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    message.channel.send(
      new MessageEmbed()
        .setTitle(`Server info for ${message.guild.name}:`)
        .setColor('#3498db')
        .setTimestamp()
        .addFields([{ name: `Total Members: ${message.guild.memberCount}`, value: `Total Online Members: ${message.guild.members.cache.filter(m => m.presence.status === 'online').size}` }])
        .setThumbnail(message.guild.iconURL())
    )
  }
}