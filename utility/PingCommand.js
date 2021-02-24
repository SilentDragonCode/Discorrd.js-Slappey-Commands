const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'utility', [], false, 'Sends your ping.', false);
  }

  run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    message.channel.send('Pong!').then(m => {
      let ping = m.createdTimestamp - message.createdTimestamp;
      m.edit(`Pong! \`\`${ping}ms\`\``);
  });
  }
}