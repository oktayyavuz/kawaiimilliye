const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send("<:warning:495950887898841089> Lütfen Silinicek Mesaj Miktarını Yazın.!");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`<:white_check_mark:495950668725747733> ${args[0]} Adet Mesajı Sildim.`)
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};
