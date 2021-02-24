const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have the right permission to use this command.");
    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason given";
    const kickEmbed = new Discord.MessageEmbed()
      .setTitle(`You were kicked out of ${message.guild.name}`)
      .setDescription(`Reason: ${reason}`)
      .setColor("#007bff")
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());

    if (!args[0]) return message.channel.send("You need to state a user to kick. \`p!kick @user reason\`");
    if (!mentionedMember) return message.channel.send("The user stated is not in the server.");
    if (message.member.roles.highest.position <= mentionedMember.roles.highest.position) return message.channel.send('You cannot kick a member with the same or higher role as you.');
    try {
      await mentionedMember.send(kickEmbed);
    } catch (err) {
      console.log(`I cannot dm the user`);
    }

    try {
      await mentionedMember.kick(reason);
    } catch (err) {
      console.log(err);
      return message.channel.send("I cannot kick the mentioned member.");
    }
  }
}
