const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class InviteCommand extends BaseCommand {
  constructor() {
    super('invite', 'invite', []);
  }

  run(client, message, args) {
    if(!message.channel.guild) return;
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username}`, message.author.avatarURL)      
    .setTitle(`Click Here To Add ${client.user.username}!`)
    .setThumbnail("https://cdn.discordapp.com/avatars/554326301167845376/479dba6b65b411cfd01a81193b19ddb2.png")
    .addField("Please click here to add the bot","[𝓡𝓝𝓩𝓦𝓨](https://discord.com/oauth2/authorize?client_id=809859517964746782&permissions=8&scope=bot)")
    .setFooter('Made by ╲⎝⧹ Solid ⧸⎠╱#0069')
    .setTimestamp()
 message.channel.send(embed);
  }
}