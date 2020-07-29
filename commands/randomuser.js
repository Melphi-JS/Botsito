module.exports = (client, message, args) => {

const Discord = require("discord.js")

if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

const miembros = message.guild.members.cache.random().displayName
const embed = new Discord.MessageEmbed()
.setDescription("El usuario que elegido es...")
.setColor("RANDOM")
message.channel.send(embed).then(m => {
    
setTimeout(() => {
const embed2 = new Discord.MessageEmbed()
.setDescription("Es el señor **"+miembros+"**")
.setColor("RANDOM")
m.edit(embed2)
}, 5000)
})
}