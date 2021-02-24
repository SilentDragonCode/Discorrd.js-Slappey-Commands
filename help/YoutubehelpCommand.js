const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class YoutubehelpCommand extends BaseCommand {
  constructor() {
    super('youtubehelp','help', []);
  }

  async run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    let embed = new Discord.MessageEmbed()
                    .setTitle("**Help GUI**")
                    .setDescription('`p!vanity` - Makes a custom vanity link for you, doesn\'t matter if your server hasn\'t reached boost level 3.\n`p!Netflix` - Shows you a download link of the free Netflix video.')
                    .setColor("#007bff")
                    .setTimestamp()
                    .setFooter('Made by ╲⎝⧹ Solid ⧸⎠╱#0069')
                message.channel.send(embed)
  }
}