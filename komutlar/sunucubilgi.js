const Discord = require('discord.js')
const moment = require('moment')

exports.run = (client, message, args) => {
	let region = {
			"us-central": "Amerika :flag_us:",
			"us-east": "Doğu Amerika :flag_us:",
			"us-south": "Güney Amerika :flag_us:",
			"us-west": "Batı Amerika :flag_us:",
			"eu-west": "Batı Avrupa :flag_eu:",
			"eu-central": "Avrupa :flag_eu:",
			"singapore": "Singapur :flag_sg:",
			"london": "Londra :flag_gb:",
			"japan": "Japonya :flag_jp:",
			"russia": "Rusya :flag_ru:",
			"hongkong": "Hong Kong :flag_hk:",
			"brazil": "Brezilya :flag_br:",
			"singapore": "Singapur :flag_sg:",
			"sydney": "Sidney :flag_au:",
			"southafrica": "Güney Afrika :flag_za:"
	}
	let kur = {
			"01": "Ocak",
			"02": "Şubat",
			"03": "Mart",
			"04": "Nisan",
			"05": "Mayıs",
			"06": "Haziran",
			"07": "Temmuz",
			"08": "Ağustos",
			"09": "Eylül",
			"10": "Ekim",
			"11": "Kasım",
			"12": "Aralık"
	}
	const embed = new Discord.RichEmbed()
		.setAuthor(`${message.guild.name} | Sunucunun Bilgileri`)
		.addField('Sunucu Kurucusu', `${message.guild.owner}`)
		.addField('Sunucu ID', message.guild.id)
		.addField('Oluşturulma Tarihi', `${moment(message.guild.createdAt).format('DD')} ${kur[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY h:mm:ss')}`)
		.addField('Sunucu Kurulum Konumu', region[message.guild.region])
		.addField(`Kanallar [${message.guild.channels.size}]`, `${message.guild.channels.filter(c => c.type === "text").size} Yazı | ${message.guild.channels.filter(c => c.type === "voice").size} Ses | ${message.guild.channels.filter(c => c.type === 'category').size} Kategori`)
		.addField(`Kullanıcılar [${message.guild.members.size}]`, `${message.guild.members.filter(m => m.user.presence.status === "online").size} Çevrimiçi | ${message.guild.members.filter(m => m.user.presence.status === "offline").size} Çevrimdışı | ${message.guild.members.filter(m => m.user.presence.status === "dnd").size} Rahatsız Etmeyin | ${message.guild.members.filter(m => m.user.presence.status === "idle").size} Boşta | ${message.guild.members.filter(m => m.user.bot).size} Bot`)
		.addField('AFK Kanalı', message.guild.afkChannel || 'Bulunmuyor')
		.addField('AFK Zaman Aşımı', `${message.guild.afkTimeout} saniye`)
		.setThumbnail(message.guild.iconURL)
		.setColor(0x00ffff)
		.setTimestamp()
	message.channel.send({embed})
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['sunucu-bilgi', 'sunucubilgi','sb'],
	permLevel: 1,
	kategori: 'kullanıcı'
}

exports.help = {
	name: 'sunucu',
	description: 'Bulunduğun sunucu hakkında bilgi verir.',
	usage: 'sunucu'
}
