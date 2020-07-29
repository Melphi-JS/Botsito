module.exports = (client, message, args) => {
const Discord = require("discord.js")

if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

const reverse = args.join(" ").split("").reverse().join("")
    
if(!reverse) return message.channel.send('Te falta colocar un texto').then(m => {
setTimeout(() => {
m.delete()
}, 4000)
})

const embed = new Discord.MessageEmbed()
.setDescription(reverse)
.setColor("RANDOM")
message.channel.send({embed})
}