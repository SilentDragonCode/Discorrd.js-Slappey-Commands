const BaseCommand = require('../../utils/structures/BaseCommand');
const util = require('minecraft-server-util');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = class McserverCommand extends BaseCommand {
  constructor() {
    super('mcserver', 'utility', []);
  }

  async run(client, message, args, Discord) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    if(!args[0]) return message.channel.send('Please enter a minecraft server ip');
    if(!args[1]) return message.channel.send('Please enter a minecraft server port');

    util.status(args[0], {port: parseInt(args[1])}).then((response) =>{
        console.log(response);
        message.channel.send(
          new MessageEmbed()        
          .setColor('#BFCDEB')
          .setTitle('Mc server status')
          .addFields(
            {name: 'Server IP', value: response.host},
            {name: 'Online Players', value: response.onlinePlayers},
            {name: 'Max Players', value: response.maxPlayers},
            {name: 'Version', value: response.version}
        )
        .setFooter('Mc server util by Solid#5117')
        );
    })
    .catch ((error) =>{
        message.channel.send('there was an error finding this server');
        throw error;
    })
  }
}