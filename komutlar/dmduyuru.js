const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {
  if (message.author.id != 391641719298588683) {
    return;
  }
  let mesaj = args.slice(0).join(" ");
  if (mesaj.length < 1) return message.channel.send("Birşey Yazmalısınız");
  message.delete();
  const mesajat = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("" + mesaj + "");

  client.users.forEach(u => {
    u.sendEmbed(mesajat);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["duyur", "duyuru", "özeldm"],
  permLevel: 4
};

exports.help = {
  name: "dmduyuru",
  description: "İstediğiniz şeyi bota duyurtur.",
  usage: "duyuru [duyurmak istediğiniz şey]"
};
