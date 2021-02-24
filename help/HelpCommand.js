const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help','help', []);
  }

  async run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    let embed = new Discord.MessageEmbed()
                    .setTitle("**Help GUI**")
                    .setDescription('`p!funhelp` - Shows all the fun commands.\n`p!utilityhelp` - Shows all the utility commands.\n`p!modhelp` - Shows all the moderation commands (Requires staff permissions).\n`p!youtubehelp` - Shows the YouTube downloads.\n`p!invite` - Shows invite for the bot.')
                    .setColor("#007bff")
                    .setTimestamp()
                    .setFooter('Made by ╲⎝⧹ Solid ⧸⎠╱#0069')
                message.channel.send(embed)
  }
}
