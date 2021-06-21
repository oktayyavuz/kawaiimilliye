const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
    message.channel.sendCode("asciidoc",`= İyi 1 Anime Eğlence Menüsü =

${prefix}yaz             ::  Yazdığını yazar.
${prefix}anime           ::  Anime önerir.
${prefix}avatar          ::  Yazdığın kişinin avatarının verir.
${prefix}aşk-ölçer       ::  Aşkını ölçer.
${prefix}espri           ::  Espri yapar.
${prefix}inek            ::  İnek Mesajı.
${prefix}balıktut        ::  Balık tutar.
${prefix}hava-durumu     ::  Hava Durumu spikerine bağlar.
${prefix}korkut          ::  Korkutur aq çocuu.
${prefix}ping            ::  Pingin söyler.
${prefix}sorusor         ::  Bana soru sorarsın.
${prefix}söv             ::  Söverim :) 
${prefix}atla            ::  Zıpzıpızıpızızp
${prefix}hesapla         ::  Hesap Makinesi.exe
${prefix}çeviri          ::  Çevirmen Modu.
${prefix}mesajdöndür     ::  Mesajı tersten sübliminal.exe
${prefix}yarichin        ::  Yarichin Bitch Club
${prefix}gayinek         ::  G4Y inek


#Eğlence komutları hakkında yardım almak icin ${prefix}eğlence `);
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
  name: 'eğlence',
  description: 'Eğlence yardım kategorilerini gösterir.',
  usage: 'eğlence'
};