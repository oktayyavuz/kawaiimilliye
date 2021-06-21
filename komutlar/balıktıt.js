const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Balık Tuttun Balığı Çekiyorsun..').then(message => {
   var baliklar = ['``Sazan Tuttun!`` :fish:' ,'``Köpek Balığı Tuttun İyi Para Eder Sat Sat`` :D' ,'``Uskumru Tuttun!`` :fish:' ,'``Mezgit Tuttun! Havyarıda Var Hee`` :) :fish:' ,'``Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?``' ,'``Hamsi Tuttun!`` :fish:' ,'``Levrek Tuttun!`` :fish:' ,'``Hiçbirşey Tutamadın Maalesef!`` :wastebasket:' ,'``Alabalık Tuttun!`` :fish:' ,'``Maalesef Balık Oltadan Kaçtı!`` :wastebasket:' ,'``İstavrit Tuttun!`` :fish:'];
      var balik = baliklar[Math.floor(Math.random() * baliklar.length)];
            message.edit(`${balik}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['balık', 'balıktut', 'balık-tut'],
  permLevel: 0
};

exports.help = {
  name: 'balıktut',
  description: 'Balık Tutarsın.',
  usage: 'balıktut'
};