module.exports = (client, message, args) => {

const Discord = require("discord.js")

if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

let id = args[0]

const usuario = message.mentions.users.first() || client.users.resolve(id) || message.author 
const autor = message.author
const avatar = new Discord.MessageEmbed()
.setTitle("Avatar de "+usuario.username)
.setDescription(`[Descargar Avatar](${usuario.displayAvatarURL({size: 1024, dynamic: true})})`)     
.setColor("RANDOM")
.setImage(usuario.displayAvatarURL({size: 1024, dynamic: true, format: 'jpg'}))
.setFooter("Pedido por "+autor.username)
message.channel.send(avatar)
} 