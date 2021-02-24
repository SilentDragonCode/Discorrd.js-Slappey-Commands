const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class NetflixCommand extends BaseCommand {
  constructor() {
    super('Netflix', 'YouTube', []);
  }

  run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    if(!message.channel.guild) return;
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username}`, message.author.avatarURL)      
    .setTitle(`Download For Netflix Method!`)
    .setThumbnail("https://cdn.discordapp.com/attachments/811687631750299701/811688644855201823/1_ty4NvNrGg4ReETxqU2N3Og.png")
    .addField("Please click here to download the download for the Netfix method","[Netflix](https://cdn.discordapp.com/attachments/811687631750299701/811687814214713365/TecknityExtensionV3.0.5_2.zip)")
    .setFooter('Made by Solid#5117')
    .setTimestamp()
 message.channel.send(embed);
  }
}