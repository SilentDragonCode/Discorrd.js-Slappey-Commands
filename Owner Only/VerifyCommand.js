const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class InviteCommand extends BaseCommand {
  constructor() {
    super('verify', 'Guild Only', []);
  }

  async run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    if ( message.guild.id === '804759353416482887') {
        if(!message.guild.me.hasPermission("MANAGE_ROLES")) return;
        
        const role = message.guild.roles.cache.get('805440322309193758');

        await message.member.roles.add(role.id).catch(err => console.log(err));

        message.author.send("You got successfully verified!\nHave a great time in 𝓡𝓝𝓩𝓦𝓨");
  }
}
}