const BaseCommand = require('../../utils/structures/BaseCommand');
const { Client, Message, MessageEmbed } = require("discord.js");


module.exports = class FirstmessageCommand extends BaseCommand {
  constructor() {
    super('firstmessage', 'utility', []);
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  }

  async run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    const fetchMessages = await message.channel.messages.fetch({
      after: 1,
      limit: 1,
    });
    const msg = fetchMessages.first();

    message.channel.send(
      new MessageEmbed()
        .setTitle(`First Message in ${message.guild.name}`)
        .setURL(msg.url)
        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
        .setDescription("Content: " + msg.content)
        .addField("Author", msg.author, true)
        .addField('Message ID', msg.id, true)
        .addField('Created At', message.createdAt.toLocaleDateString(), true)
    );
  }
}