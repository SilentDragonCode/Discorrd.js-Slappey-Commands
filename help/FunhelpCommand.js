const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class FunhelpCommand extends BaseCommand {
  constructor() {
    super('funhelp', 'help', []);
  }

  async run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    let embed = new Discord.MessageEmbed()
                    .setTitle("**Fun Help GUI**")
                    .setDescription('`p!roll` - Roles a dice.\n`p!meme` - Sends a meme.\n`p!say message` - Makes the bot send your message in an embed.\n`p!quote` - Shows you a quote that makes your day better.\n`p!insult` - insults someone for you.\n`p!joke` - Tells you a good joke.\n`p!smoke` - Smokes a cigarette.\n`p!weather` - Checks the weather.\n`p!emojify message` - Tanslate a message to emoji\'s.')
                    .setColor("#007bff")
                    .setTimestamp()
                    .setFooter(`Made by ╲⎝⧹ Solid ⧸⎠╱#0069`)
                message.channel.send(embed)
  }
}
