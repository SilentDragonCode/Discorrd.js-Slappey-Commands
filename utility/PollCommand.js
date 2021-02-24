const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PollCommand extends BaseCommand {
  constructor() {
    super('poll', 'utility', ['p'], false, 'makes a poll.', false);
  }

  async run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    if (!message.member.hasPermission("MANAGE_MESSAGES"))return message.channel.send("You do not have permission to use this command.");
    let PollChannel = message.mentions.channels.first();
    let PollDescription = args.slice(1).join(' ');

    let embedPoll = new Discord.MessageEmbed()
    .setTitle(`New Poll By ${message.member.user.tag}`)
    .setDescription(PollDescription)
    .setColor('RED')
    let msgEmbed = await PollChannel.send(embedPoll);
    await msgEmbed.react('<:upvote:805342531083567124>')
    await msgEmbed.react('<:downvote:805342530715648031>')
  }
}