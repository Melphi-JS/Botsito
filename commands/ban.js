module.exports = (client, message, args) => {

const Discord = require("discord.js")

if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

let permisos = message.member.permissions.has('BAN_MEMBERS')
if(!permisos) return message.channel.send("No tienes permisos para usar este comando.")
    
let permisobot = message.guild.me.permissions.has('BAN_MEMBERS')
if(!permisobot) return message.channel.send("No tengo permisos")

let usuario = message.mentions.users.first() || client.users.resolve(args[0])
if(!usuario) return message.channel.send("No mencionaste a nadie.")

message.guild.member(mentioned).ban(reason)

const embed = new Discord.MessageEmbed()
.setDescription("**"+message.author.username +"** a baneado a **"+usuario.username+"**")
.setColor("RANDOM")
message.channel.send(embed)
}