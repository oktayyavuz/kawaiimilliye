const Discord = require('discord.js');

exports.run = function (client, message, args) {
    let kişi = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Lütfen birisini etiketlermisin...')
    let yazi = args[1]
    if (!yazi) return message.reply('Lütfen mesajını yazınız.')
    message.delete()
    message.channel.createWebhook(kişi.username, kişi.avatarURL)
    .then(webhook => webhook.edit(kişi.username, kişi.avatarURL)
        .then(wb => {
            const hook = new Discord.WebhookClient(wb.id, wb.token);
            hook.send(yazi)
            hook.delete()
        })
        .catch(console.error))
        .catch(console.error);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
kategori: "eğlence"
};

exports.help = {
    name: 'fakemesaj',
    description: 'fakemesaj',
    usage: 'fakemesaj'
};
