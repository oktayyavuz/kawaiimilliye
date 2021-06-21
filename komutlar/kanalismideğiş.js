const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var args = message.content.split(' ').slice(1).join(' ');
  if (!args) return message.reply("**Kanalın adını ne yapmam gerektiğini söylemelisin.**");
  message.channel.setName(`${args}`)
  .then(newChannel => message.channel.send(`Bu kanalın yeni ismi ***#${args}***`))
  .catch(console.error);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kanalismideğiş','kanal-ismideğiş','kanalismi-değiş'],
  permLevel: 2
};

exports.help = {
  name: 'kanal-ismi-değiş',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kanalismideğiş'
};
