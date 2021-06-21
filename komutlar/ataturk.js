const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, params) => {
  let prefix = ayarlar.prefix;

  if (!params[0]) {
    message.channel.sendCode(
      "asciidoc",
      `⢠⡤⢺⣿⣿⣿⣿⣿⣶⣄
⠀⠀⠉⠀⠘⠛⠉⣽⣿⣿⣿⣿⡇
⠀⠀⠀⠀⠀⠀⠀⢉⣿⣿⣿⣿⡗
⠀⢀⣀⡀⢀⣀⣤⣤⣽⣿⣼⣿⢇⡄
⠀⠀⠙⠗⢸⣿⠁⠈⠋⢨⣏⡉⣳
⠀⠀⠀⠀⢸⣿⡄⢠⣴⣿⣿⣿
⠀⠀⠀⠀⠉⣻⣿⣿⣿⣿⣿⡟⡀
⠀⠀⠀⠀⠐⠘⣿⣶⡿⠟⠁⣴⣿⣄
⠀⠀⠀⠀⠀⠘⠛⠉⣠⣴⣾⣿⣿⣿⡦
⠀⠀⢀⣴⣠⣄⠸⠿⣻⣿⣿⣿⣿⠏
⠀⣠⣿⣿⠟
 `
    );
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode(
        "asciidoc",
        `= ${command.help.name} =

Hakkında  :: ${command.help.description}
Kullanım  :: ${prefix}${command.help.usage}`
      );
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["atam"],
  permLevel: 0
};

exports.help = {
  name: "Atatürk",
  description: "Atatürk",
  usage: "atatürk"
};
