const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class SmCommand extends BaseCommand {
  constructor() {
    super('sm', 'moderation', ['slowmode']);
  }

  async run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permission to use this command.");
    if(!args[0]) return message.channel.send("You didn\'t specify a valid time.");
    if(isNaN(args[0])) return message.channel.send("You didn\'t specify a valid time.");
    var time = args[0]
    if(args[0] < 0) return message.channel.send("You need to think positive, not everything is negative!");
    if(args[0] > 21600) return message.channel.send("Don\'t you think that\'s a bit too long? Please no more then 6h (21.600s)")
    message.channel.setRateLimitPerUser(time)

    var verify = message.guild.emojis.cache.find(emoji => emoji.name === 'Logout');

    var embed = new Discord.MessageEmbed()
    .setColor('#EBDBD4')
    .setTitle(`${verify} I have successfully set slowmode to \`${time}\` seconds!`);
    message.channel.send(embed)
  }
}