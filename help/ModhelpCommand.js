const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class ModhelpCommand extends BaseCommand {
  constructor() {
    super('modhelp', 'help', []);
  }

  async run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    if (!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("You do not have permission to use this command.");
    let embed = new Discord.MessageEmbed()
                    .setTitle("**Moderation Help GUI**")
                    .setDescription('`p!kick @user reason` - Kicks a user from the server.\n`p!ban @user reason` - Bans a user from the server.\n`p!unban user ID reason` - Unbans the user from the server.\n`p!mute user` - Mutes the user in the server.\n`p!unmute user` - Unmutes the user in the server.\n`p!tempmute user duration` - Mutes the user for a specific time in the server.\n`p!banlist` - Shows everyone who is banned from the guild.\n`p!bans` - Shows how many members there are banned in the guild.\n`p!nuke` - Wipes the channel the command is sent in.\n`p!purge` - Deletes your amount of messages in the channel.\n`p!sm` - Sets a custom slow mode inn your channel.')
                    .setColor("#007bff")
                    .setTimestamp()
                    .setFooter('Made by ╲⎝⧹ Solid ⧸⎠╱#0069')
                message.channel.send(embed)
  }
}
