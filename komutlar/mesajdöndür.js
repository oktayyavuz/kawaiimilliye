const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');


var prefix = ayarlar.prefix;




const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
// Start with the character '!'
const OFFSET = '!'.charCodeAt(0);

exports.run = (bot, msg, args) => {
    if (args.length < 1) {
        msg.reply('**Döndürmem için bir mesaj belirt!**');
    }

    msg.channel.send(
        args.join(' ').split('')
            .map(c => c.charCodeAt(0) - OFFSET)
            .map(c => mapping[c] || ' ')
            .reverse().join('')
    );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'mesajdöndür',
  description: 'Mesajınızı tersden yazar.',
  usage: 'mesajdöndür <mesaj>'
};
