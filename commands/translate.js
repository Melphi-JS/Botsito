module.exports = (client, message, args) => {
const Discord = require("discord.js")
const translate = require("@vitalets/google-translate-api")
    
if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

let lang = args[0]
let msg = args.slice(1).join(' ')
    
if (!lang) return message.channel.send("Necesitas poner un idioma y palabra a traducir.").then(m => {
setTimeout(() => {
m.delete()
}, 4000)
})
    
if (!msg) return message.channel.send("Necesitas colocar el mensaje o idioma a traducir.").then(m => {
setTimeout(() => {
m.delete()
}, 4000)
})
    
translate(msg, {to: lang}).then(res => {
const embed = new Discord.MessageEmbed()
.setTitle("🌍 Traductor")
.setColor("03BDF9")
.addField("Texto", msg)
.addField("Traducido",`${res.text}`)
message.channel.send(embed)
})}