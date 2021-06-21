  const Discord = require('discord.js');
  exports.run = (client, msg, args) => {
   const members = msg.guild.members.filter(member => member.user.presence.game && /(discord\.(gg|io|me|li)\/.+|discordapp\.com\/invite\/.+)/i.test(member.user.presence.game.name));
   return msg.channel.send(members.map(member => `\`${member.id}\` ${member.displayName}`).join("\n") || "Kimse oynuyor yerine reklam koymamış.");
  };

  exports.conf = {
   enabled: true,
   guildOnly: true,
   aliases: ["reklamtaraması", "reklambul", "rtaraması"]
  };

  exports.help = {
   name: 'reklamtaraması',
   description: 'Returns a list of members with an invite as their game.',
   usage: 'checkinvites'
  };