const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class BanlistCommand extends BaseCommand {
  constructor() {
    super('banlist', 'moderation', []);
  }

  run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    const bans = new Map();
    message.guild.fetchBans().then(g => {
        bans[g.id] = g;
          let sicon = message.guild.iconURL;
        let banlist = (`${bans[g.id].map(ge => `\n ${ge.tag}`).join('')}`)
        let noembed = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setDescription(`No bans on this server.`)
.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
        if(banlist.length === 0) return message.channel.send(noembed)
        const embed = new Discord.MessageEmbed()
            .setDescription(banlist)
        .setTitle(`Bans for: ${message.guild.name}`)
        .setThumbnail(sicon)
.setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
            .setColor(`RANDOM`)
        message.channel.send(embed)
});
  }
}