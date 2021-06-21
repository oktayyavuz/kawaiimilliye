const Discord = require('discord.js');

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Davet Menüsü",
              icon_url: "https://cdn.discordapp.com/avatars/795322802050957333/06d790fc921cb7af5debb6fff15f4c86.png?size=2048"
            },
			    "thumbnail": {
				 "url": "https://cdn.discordapp.com/avatars/795322802050957333/06d790fc921cb7af5debb6fff15f4c86.png?size=2048"
			},
            title: "",
            description: "[Botun Davet Linki:](https://discord.com/oauth2/authorize?client_id=795322802050957333&scope=bot&permissions=805314622) \n[Botun Aktif Sunucusu:](https://discord.com/invite/Xn2AkesuNS)",
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "© iyi1anime © "
            }
          }
        });
	    message.react("📝")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['d','davet', 'link', 'linkler'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun Davet Linkini Gösterir',
  usage: 'davet'
};
