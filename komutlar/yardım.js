const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
    message.channel.sendCode("asciidoc",`= İyi 1 Anime Yardım Menüsü =

${prefix}eğlence        ::  Eğlence komutlarını gösterir.
${prefix}kullanıcı      ::  Kullanıcı komutlarını gösterir.
${prefix}yetkili        ::  Yetkili komutlarını gösterir.
${prefix}extra         ::  Ekstra komutları gösterir.

# Komutlar hakkında yardım almak icin ${prefix}yardım `);
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
  aliases: ['help', 'kodlar', 'komutlar', 'command', 'commands', 'yardım'],
  permLevel: 0
};

exports.help = {
  name: 'yardım ',
  description: 'Komut kategorilerini gösterir.',
  usage: 'yardım'
};