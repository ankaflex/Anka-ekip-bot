const disbut = require("discord-buttons");
module.exports.run = async (client, message, args, durum, kanal) => {
    if (!client.ayarlar.sahip.some(x => x == message.author.id)) return;

let meriazk = new disbut.MessageButton().setStyle('gray').setLabel('Sunucuyu baştan aşşağı entegre etmek için tıkla!').setID('meriazk').setEmoji('968174248784982046')


message.channel.send(`${client.emojis.cache.find(x => x.name === "ramal_yildiz")} Selam \`OWNER\` arkadaş yada \`Meriaz\` alttaki butonu basarak sunucuyu entegre edebilirsin.
`

, {
    buttons: [meriazk]
})



}

client.on('clickButton', async (button) => {
   
    if (button.id === 'meriazk') {
      button.reply.send(`${client.emojis.cache.find(x => x.name === "ramal_tik2")} Ramal sunucu başarıyla entegre edildi kuruluma başlıyabilirsin kolay gelsin...
      `
 )
  
    }
   
    });
exports.conf = {
    aliases: []
}
exports.help = {
    name: 'merikur'
}
