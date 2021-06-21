const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
    message.channel.sendCode("asciidoc",`= İyi 1 Anime Extra Menüsü =

${prefix}emojiler    ::  Emojileri gösterir.
${prefix}davet       ::  Botun ve sunucunun davet kodu.
${prefix}winner      ::  Kazandırır. (Bu kodun yanıtı biraz geç gelecektir.)
${prefix}sunucubilgi ::  Sunucu hakkında bilgi verir.
${prefix}sunucuresmi ::  Sunucu profil fotoğrafını verir.
${prefix}roller      ::  Rolleri gösterir.
${prefix}rolinfo     ::  Belitrilen rolün yetiklerini gösterir.
${prefix}yetkilerim  ::  Sizin yetkilerinizi gösterir.

#Extra komutları hakkında yardım almak icin ${prefix}extra `);
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
  name: 'extra',
  description: 'Extra yardım kategorilerini gösterir.',
  usage: 'extra'
};