module.exports = (client, message, args) => {

const Discord =  require("discord.js")
message.delete()
    
if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

const captura = args.join(" ")
if (!captura) return message.channel.send("Deben colocar un link de una imagen").then(m => {
setTimeout(() => {
m.delete()
}, 5000)
})
    
const embed = new Discord.MessageEmbed()
.setImage(captura)
.setColor("RANDOM")
message.channel.send(embed)
}   