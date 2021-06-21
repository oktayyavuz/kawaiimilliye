const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
    message.channel.sendCode("asciidoc",`= İyi 1 Anime Kullanıcı Menüsü =

${prefix}kullanıcıbilgim ::  Yazdığını yazar.
${prefix}iyi1anime       ::  Bot istatistikleri.(Bende bir kullanıcıyım aq)

#Kullanıcı komutları hakkında yardım almak icin ${prefix}eğlence `);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('asciidoc', `= ${command.help.name} =

Hakkında  :: ${command.help.description}
Kullanım  :: ${prefix}${command.help.usage}`);
    }
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  
};

exports.help = {
  name: 'kullanıcı',
  description: 'Kullanıcı yardım kategorilerini gösterir.',
  usage: 'kullanıcı'
};