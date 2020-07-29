module.exports = async (client, message, args) => {
const Discord = require("discord.js")
    
if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

let formembers = args[0];
let reason1 = args.slice(1).join(" ") || 'No definida'
      
if (!message.guild.me.permissions.has('BAN_MEMBERS'))  return message.channel.send("No tengo permisos.").then(m => {
setTimeout(() => {
m.delete()
}, 4000)
})
    
if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send("No tienes permisos.").then(m => {
setTimeout(() => {
m.delete()
}, 4000)
})
    
if (!formembers) return message.channel.send('Escriba la id del usuario a desbanear.').then(m => {
setTimeout(() => {
m.delete()
}, 4000)
})
    
const member = await client.users.fetch(formembers)
const ban = await message.guild.fetchBans()
    
if (!ban.get(member.id)) return message.channel.send("Este usuario no se encuentra baneado.").then(m => {
setTimeout(() => {
m.delete()
}, 4000)
})

var user = ban.get(member.id)
message.guild.members.unban(member)
    
const embed = new Discord.MessageEmbed()
.addField("Usuario", "**"+user.user.username +"#"+user.user.discriminator+"**")
.addField("ID", "**"+member.id+"**")
.addField("Razón", "**"+reason1+"**")  
.setColor("RANDOM")
message.channel.send({embed})
}