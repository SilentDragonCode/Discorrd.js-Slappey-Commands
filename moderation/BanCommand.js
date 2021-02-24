const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to use this command.");
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("My role does not have permission to ban people.");

    let reason = args.slice(1).join(" ");
    const mentionedMember = message.mentions.members.first();

    if (!reason) reason = 'No reason given.';
    if (!args[0]) return message.channel.send('You must state someone to ban. `\`p!ban @user reason\`');
    if (!mentionedMember) return message.channel.send('The member stated is not in the server.');
    if (!mentionedMember.bannable) return message.channel.send('I cannot ban this member.');
    if (message.member.roles.highest.position <= mentionedMember.roles.highest.position) return message.channel.send('You cannot ban a member with the same or higher role as you.');

    const banEmbed = new Discord.MessageEmbed()
      .setTitle(`You have been banned from ${message.guild.me}`)
      .setDescription(`Reason: ${reason}`)
      .setColor("#2796f7")
      .setTimestamp();

    await mentionedMember.send(banEmbed).catch(err => console.log(err));
    await mentionedMember.ban({
      days: 7,
      reason: reason
    }).catch(err => console.Log(err)).then(() => message.channel.send("Successfully banned " + mentionedMember.user.tag));
  }
}
