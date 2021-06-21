const Discord = require('discord.js')

exports.run = (client, message, args) => {
	try {
		const embed = new Discord.RichEmbed()
			.addField(`Sunucuda Bulunan Emojiler`, message.guild.emojis.map(emoji => emoji).join(' | '))
			.setColor(0x00ffff)
			.setTimestamp()
		message.channel.send({embed})
	} catch (err) {
		const embed = new Discord.RichEmbed()
			.addField(`Sunucuda Bulunan Emojiler`, 'Üzgünüm ama sunucunuzda ya çok fazla emoji bulunuyor ya da hiç emoji bulunmuyor. Bunları gösteremiyorum. Discord buna izin vermiyor.')
			.setColor(0x00ffff)
			.setTimestamp()
		message.channel.send({embed})
	}
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 0,
	kategori: 'kullanıcı'
}

exports.help = {
	name: 'emojiler',
	description: 'Sunucuda bulunan emojileri gösterir.',
	usage: 'emojiler'
}
