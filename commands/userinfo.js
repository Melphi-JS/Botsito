module.exports = (client, message, args) => {

const Discord = require("discord.js")

if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

let id = args[0]
let persona = message.mentions.users.first() || client.users.resolve(id) || message.author 
let Colores = ["FDF6F3","6AABE5","BE36F9","36BEF9"]
let randomcolor = Colores[Math.floor(Math.random() * Colores.length)]


function days(date) {
let now = new Date();
let diff = now.getTime() - date.getTime()
let dias = Math.floor(diff / 86400000)
return `**${dias == 0 ? "Hoy**" : dias.toLocaleString() + (dias == 1 ? "** Hace un dia" : "** Dias")}`
}

const userinfo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true, format: 'jpg'}))
.setTitle("Información de "+persona.username)
.addField("Usuario", persona.username, true)
.addField("ID", persona.id, true)
.addField("Tag", persona.discriminator, true)
.addField("Apodo", message.guild.member(persona).nickname != null ? message.guild.member(persona).nickname : "No tiene apodo.", true)
.addField("Cuenta creada", `Hace ${days(persona.createdAt)}`, true)
.setImage(persona.displayAvatarURL({size: 1024, dynamic: true, format: 'jpg'}))
.setColor(randomcolor)
message.channel.send(userinfo)
}