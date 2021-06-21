const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Dizi öneriliyor.').then(message => {
      var diziler = [];
      var dizi = diziler[Math.floor(Math.random() * diziler.length)];
            message.edit(`${dizi}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dizi', 'diziöner', 'dizioner', 'dizi'],
  permLevel: 0
};

exports.help = {
  name: 'diziöner',
  description: 'anime önerir.',
  usage: 'diziöner'
};