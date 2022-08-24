const {
    MessageEmbed,
    Discord
    } = require("discord.js");
    const conf = client.ayarlar;
    let mongoose = require("mongoose");
    let sunucuayar = require("../../models/sunucuayar");
    module.exports.run = async (client, message, args, durum, kanal) => {
    if (!message.guild) return;
    
    if (message.member.permissions.has(8) || durum) {
    let data = await sunucuayar.findOne({});
    let sunucuTAG = data.TAG;
    let Meriaz1 = await message.guild.members.cache.filter(member => member.user.username.includes(sunucuTAG)).size;
    let Meriaz2 = await message.guild.members.cache.filter(member => member.user.username.includes(data.TAG2)).size;
    let Meriaz3 = await message.guild.members.cache.filter(member => member.user.username.includes(data.TAG3)).size;
    let Meriaz4 = await message.guild.members.cache.filter(member => member.user.username.includes(data.TAG4)).size;
    let Meriaz5 = await message.guild.members.cache.filter(member => member.user.username.includes(data.TAG5)).size;
    let Meriaz6 = await message.guild.members.cache.filter(member => member.user.username.includes(data.TAG6)).size;
    let Meriaz7 = await message.guild.members.cache.filter(member => member.user.username.includes(data.TAG7)).size;
    let Meriaz8 = await message.guild.members.cache.filter(member => member.user.username.includes(data.ETİKET)).size;
    
    let toplam = Meriaz1 + Meriaz2 + Meriaz3 + Meriaz4 + Meriaz5 + Meriaz6 + Meriaz7 + Meriaz8    
        
    let sesli = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.filter(member => !member.user.bot).size).reduce((a, b) => a + b);
    let bot = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.filter(member => member.user.bot).size).reduce((a, b) => a + b);
    let embed = new MessageEmbed()
    .setColor("BLACK")
    .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setFooter(`Developed By Ramal`, message.guild.iconURL({ dynamic: true })).setTimestamp().setColor("RANDOM")
    .setDescription(`${client.emojis.cache.find(x => x.name === "ramal_sessay")} Şu anda toplam **${sesli}** (**+${bot} bot**) kişi seslide.
    ${client.emojis.cache.find(x => x.name === "ramal_usersay")} Sunucuda **${message.guild.memberCount}** adet üye var (**${message.guild.members.cache.filter(member => member.presence.status !== "offline").size}** Aktif)
    ${client.emojis.cache.find(x => x.name === "ramal_tagsay")} Toplamda **${toplam}** kişi tagımızı alarak bizi desteklemiş.
    ${client.emojis.cache.find(x => x.name === "ramal_boostsay")} Toplamda **${message.guild.premiumSubscriptionCount}** adet boost basılmış! ve Sunucu **${message.guild.premiumTier}** seviye`);
    message.channel.send(embed)
    }
    }
    exports.conf = {
    aliases: ["sunucusay", "ramalsay", "Say"]
    };
    exports.help = {
    name: 'say'
    };
    
