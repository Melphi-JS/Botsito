module.exports = (client, message, args) => {
const Discord = require("discord.js")
    
if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

let iconURL = message.guild.iconURL({format: 'jpg', size: 1024, dynamic: true})

message.channel.send(new Discord.MessageEmbed()
.setImage(iconURL)
.setColor("RANDOM")
)}              