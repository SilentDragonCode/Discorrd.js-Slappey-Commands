const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class BansCommand extends BaseCommand {
  constructor() {
    super('bans', 'moderation', []);
  }

  run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    message.guild.fetchBans().then(b => {
        let embed = new Discord.MessageEmbed()
            .setDescription(`There are **${b.size}** bans in \`${message.guild.name}\``)
            .setColor("BLUE")
        message.channel.send(embed)
    })
  }
}