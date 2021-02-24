const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class GuildsCommand extends BaseCommand {
  constructor() {
    super('guilds', 'Owner Only', []);
  }

  run(client, message, args) {
    const ownerID = '808991374627700738';


    if (message.author.id !== ownerID) return message.channel.send("You are not authorized to use this command.");
    let string = '';

    client.guilds.cache.forEach(guild => {
        string += '***Server Name:*** ' + guild.name + '\n' + '***Server ID:***` ' + guild.id + ' ` ' + '\n\n';

    })

    let botembed = new Discord.MessageEmbed()
        .setColor("#000FF")
        .addField("Bot is On ", string)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL);
    message.channel.send(botembed);
  }
}