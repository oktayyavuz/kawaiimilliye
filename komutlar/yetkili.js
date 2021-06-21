const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
    message.channel.sendCode("asciidoc",`= İyi 1 Anime Yetkili Menüsü =

${prefix}ban            ::  Kişiyi sunucudan engeller.
${prefix}davetoluştur   ::  Davet linki oluşturur.
${prefix}oylama         ::  Oylama yapar.
${prefix}herkesedm      ::  Herkese mesaj gönderir.
${prefix}kanalismideğiş ::  Kanalın adını değiştir.
${prefix}otorol-kapat   ::  Otorolü kapatır.
${prefix}kick           ::  Kişiyi sunucudan atar.
${prefix}rastgeleuye    ::  Random üye seçer.
${prefix}reklamtaraması ::  Reklam taramasını açar.
${prefix}slowmode       ::  Yavaş modu açar.
${prefix}sustur         ::  Belirtilen üyeyi susturur.
${prefix}temizle        ::  Mesajları temizler
${prefix}uyar           ::  Üyeye uyarı verir.




#Yetkili komutları hakkında yardım almak icin ${prefix}yetkili `);
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
  permLevel: 1,
};

exports.help = {
  name: 'yetkili',
  description: 'Yetkili yardım kategorilerini gösterir.',
  usage: 'yetkili'
};