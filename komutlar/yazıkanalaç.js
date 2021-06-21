const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bunun için gerekli iznin yok');
	if (kanal.length < 1) return message.reply('Lütfen oluşturacağım kanalın adını yaz.');
  message.delete();
  guild.createChannel(kanal, 'text');
  message.channel.send("Kanal oluşturuldu");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazı-kanal-aç'],
  permLevel: 3,
  kategori: "bot",
};

exports.help = {
  name: 'yazı-kanal-aç',
  description: 'Bir yazı kanalı açar',
  usage: 'yazı-kanal-aç [açmak istediğiniz kanalın adı]'
};
