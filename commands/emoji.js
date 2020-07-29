module.exports = (client, message, args) => {
const Discord = require("discord.js")

let cosa = args.join(' ')

let emoji = message.guild.emojis.cache.find(x => x.name === cosa)

if(!emoji) return message.channel.send("Debes nombrar un emoji")

const emojis = new Discord.MessageEmbed()
.setTitle("Emojis de "+message.guild.name)
.setDescription(`**Nombre:** \`${emoji.name}\`\n**ID:** \`${emoji.id}\`\n**Completo:** \`${emoji.name}:${emoji.id}\``)
.setImage(`${emoji.url}`)
.setColor("RANDOM")
message.channel.send(emojis)
}
    
    
    