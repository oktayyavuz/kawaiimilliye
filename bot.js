const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;


const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('guildBanAdd' , (guild, user) => {
  let banlar = guild.channel.id('783340781507182593');
  if (!banlar) return;
  banlar.send('https://media.giphy.com/media/8njotXALXXNrW/giphy.gif **Adalet dağıtma zamanı gelmiş!** '+ user.username +'**Bakıyorum da suç işlemiş,Yargı dağıtmaya devam** :fist: :writing_hand:  :spy:' );
});

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {

  if (msg.content === '50 krş') {
    msg.reply('vermezsen küserim moruq ');
  }
  if (msg.content === 'yardım') {
    msg.reply('tüm tuşlara bas knk ');
  }

  if (msg.content.toLowerCase() === prefix + 'youtube' ) {
    msg.reply('Daha yok aq')
  }

  if (msg.content.toLowerCase() === prefix + 'bot davet' ) {
    msg.reply('https://discord.com/oauth2/authorize?client_id=795322802050957333&scope=bot&permissions=8&response_type=code')
  }
  if (msg.content.toLowerCase() === prefix + 'iletişim' ) {
    msg.reply('İsntagram: @oktayyavuz_1')
  }
  

});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "sa") {
    msg.channel.sendMessage("Aleyküm selam, hoş geldin ^^");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "selam") {
    msg.channel.sendMessage("Aleyküm selam, hoş geldin ^^");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "sea") {
    msg.channel.sendMessage("Aleyküm selam, hoş geldin ^^");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "selamun aleyküm") {
    msg.channel.sendMessage("Aleyküm selam, hoş geldin ^^");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === prefix + "yarichin") {
    msg.channel.sendMessage(
      "```🎤sawarasenai🥰kimi😸wa⛓shoujo👻na💅no?✨böKù🌸Wâ🧚ÿARiçHiñ🤴BįCChī😾ńO😩oSû🚣Dà🎉YO💦🎤sawarasenai🥰kimi😸wa⛓shoujo👻na💅no?✨böKù🌸Wâ🧚ÿARiçHiñ🤴BįCChī😾ńO😩oSû🚣Dà🎉YO💦```"
    );
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === prefix + "botubugasokabaq") {
    msg.channel.sendMessage(
      "ibotubugasokabaq"
    );
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === prefix + "botubugasokabaq2") {
    msg.channel.sendMessage(
      "ibotbugdaabaq"
    );
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === prefix + "botbugdaabaq") {
    msg.channel.sendMessage(
      "ibotubugasokabaq2"
    );
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === prefix + "bugagirmekiçinbirkanalaç") {
    msg.channel.sendMessage(
      "ibugagirmekiçinbirkanalaç kanaladı"
    );
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === prefix + "bugagirmekiçinbirkanalaç kanaladı") {
    msg.channel.sendMessage(
      "ibugagirmekiçinbirkanalaç"
    );
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
