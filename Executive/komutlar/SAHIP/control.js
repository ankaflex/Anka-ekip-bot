
const disbut = require("discord-buttons");
const { MessageEmbed } = require("discord.js");
let sunucuayar = require("../../models/sunucuayar");
module.exports.run = async (client, message, args, durum, kanal) => {
    if (message.member.permissions.has(8) || !client.ayarlar.sahip.some(x => x == message.author.id)) {
    let config = {
        "etkinlik": "972755436371595334",
        "cekilis": "972755434530304020",
        "taglırol": "972755414770921483",
    }
    let vericik = await sunucuayar.findOne({});
    let tag = vericik.TAG;
    let tag3 = vericik.TAG3;
    let tag4 = vericik.TAG4;
    let tag5 = vericik.TAG5;
    let tag6 = vericik.TAG6;
    let tag7 = vericik.TAG7;
    let etiket = vericik.ETİKET;
    let tagrol = vericik.TEAM
    let taglısize = message.guild.members.cache.filter(member => member.user.username.toLowerCase().includes(tag) || member.user.username.toLowerCase().includes(tag3) || member.user.username.toLowerCase().includes(tag4) || member.user.username.toLowerCase().includes(tag5) || member.user.username.toLowerCase().includes(tag6) || member.user.username.toLowerCase().includes(tag7) || member.user.discriminator.toLowerCase().includes(etiket) && !member.roles.cache.has(tagrol))
    let et = message.guild.members.cache.filter(member => !member.roles.cache.has(config.etkinlik)).size;
    let ce = message.guild.members.cache.filter(member => !member.roles.cache.has(config.cekilis)).size;

let btagrol = new disbut.MessageButton().setStyle('red').setLabel('Tag Rolü Dağıt!').setID('btagrol')
let edagit = new disbut.MessageButton().setStyle('red').setLabel('Etkinlik K. Dağıt').setID('edagit')
let cdagit = new disbut.MessageButton().setStyle('red').setLabel('Çekiliş K. Dağıt').setID('cdagit')


let embed = new MessageEmbed()
.setDescription(`Merhaba! **${message.guild.name}** sunucusu içerisi kontrol ekranına hoş geldin!

${client.emojis.cache.find(x => x.name === "ramal_yildiz")} **Toplam taglı sayısı rolü olmayana dağıt:** \`${taglısize.size}\`
${client.emojis.cache.find(x => x.name === "ramal_yildiz")} **Etkinlik katılımcısı rolü olmayan kullanıcı sayısı:** \`${et}\`
${client.emojis.cache.find(x => x.name === "ramal_yildiz")} **Çekiliş katılımcısı rolü olmayan kullanıcı sayısı:** \`${ce}\`

Rolleri dağıtmak için uygun butona tıklamanız yeterli!
`)
.setFooter(`Developed By Ramal`, message.guild.iconURL({ dynamic: true })).setTimestamp().setColor("RANDOM")
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))

message.channel.send(embed, { buttons: [cdagit,edagit,btagrol] })

}
}
client.on('clickButton', async (button) => {
    if (button.id === 'btagrol') {
        let vericik = await sunucuayar.findOne({});
        let tag = vericik.TAG;
        let tag3 = vericik.TAG3;
        let tag4 = vericik.TAG4;
        let tag5 = vericik.TAG5;
        let tag6 = vericik.TAG6;
        let tag7 = vericik.TAG7;
        let etiket = vericik.ETİKET;
        let tagrol = vericik.TEAM
        let kek = button.guild.members.cache.filter(member => member.user.username.toLowerCase().includes(tag) || member.user.username.toLowerCase().includes(tag3) || member.user.username.toLowerCase().includes(tag4) || member.user.username.toLowerCase().includes(tag5) || member.user.username.toLowerCase().includes(tag6) || member.user.username.toLowerCase().includes(tag7) || member.user.discriminator.toLowerCase().includes(etiket) && !member.roles.cache.has(tagrol))
    button.reply.send(`Tagı olup rolü olmayan kullanıcılara rolleri verildi.`)
    button.guild.members.cache.filter(member => member.user.username.toLowerCase().includes(tag) || member.user.username.toLowerCase().includes(tag3) || member.user.username.toLowerCase().includes(tag4) || member.user.username.toLowerCase().includes(tag5) || member.user.username.toLowerCase().includes(tag6) || member.user.username.toLowerCase().includes(tag7) || member.user.discriminator.toLowerCase().includes(etiket) && !member.roles.cache.has(tagrol)).map(x=> x.roles.add(tagrol))      
    }
    if (button.id === 'edagit') {
        let çay = {
            "etkinlik": "972755436371595334",
        }
    let pasta = button.guild.members.cache.filter(member => !member.roles.cache.has(çay.etkinlik))
        let emcük = ["972755436371595334"];
        button.reply.send(`Etkinlik K. rolü olmayan ${pasta.size} kullanıcıya etkinlik rolleri verildi !`)
        button.guild.members.cache.filter(member => !member.roles.cache.has(çay.etkinlik)).map(x=> x.roles.add(emcük));
    }
    if (button.id === 'cdagit') {
        let çay = {
            "cekilis": "972755434530304020",
        }
    let pasta = button.guild.members.cache.filter(member => !member.roles.cache.has(çay.etkinlik))
        let yarak = ["972755434530304020"];
        button.reply.send(`Çekiliş K. rolü olmayan ${pasta.size} kullanıcıya çekiliş rolleri verildi !`)
        button.guild.members.cache.filter(member => !member.roles.cache.has(çay.cekilis)).map(x=> x.roles.add(yarak));
    }

  });
exports.conf = {
    aliases: ['ramaltagver','kontrol']
}
exports.help = {
    name: 'control'
}
