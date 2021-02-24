const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class UtilityhelpCommand extends BaseCommand {
  constructor() {
    super('utilityhelp', 'help', []);
  }

  async run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    let embed = new Discord.MessageEmbed()
                    .setTitle("**Utility Help GUI**")
                    .setDescription('`p!ping` - Sends the ping of the bot.\n`p!server` - Sends total member count.\n`p!avatar @user` - Displays the avatar of the mentioned user.\n`p!snipe` - Snipes the last message for you.\n`p!firstmessage` - Sends the first message of a channel.\n`p!mcserver [server ip] [server port]` - Checks a minecraft server.\n`p!vanity` - Makes a custom vanity link for you, doesn\'t matter if your server hasn\'t reached boost level 3.')
                    .setColor("#007bff")
                    .setTimestamp()
                    .setFooter('Made by ╲⎝⧹ Solid ⧸⎠╱#0069')
                message.channel.send(embed)
  }
}
