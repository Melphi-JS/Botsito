module.exports = (client, message, args) => {

const Discord = require("discord.js")

if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

let permisos = message.member.permissions.has('KICK_MEMBERS')
if(!permisos) return message.channel.send("No tienes permisos para usar este comando.").then(m => {
setTimeout(() => {
m.delete()
}, 4000)
})

let permisobot = message.guild.me.permissions.has('KICK_MEMBERS')
if(!permisobot) return message.channel.send("No tengo permisos").then(m => {
setTimeout(() => {
m.delete()
}, 4000)
})

let usuario = message.mentions.users.first() || client.users.resolve(args[0])
if(!usuario) return message.channel.send("No mencionaste a nadie.").then(m => {
setTimeout(() => {
m.delete()
}, 4000)
})

message.guild.member(usuario).kick
const algo = new Discord.MessageEmbed()
.setDescription("**"+message.author.username+"** a expulsado a "+usuario.username)
.setColor("RANDOM")
message.channel.send(algo)
}