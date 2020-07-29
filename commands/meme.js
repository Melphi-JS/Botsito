module.exports = async (client, message, args) => {

const Discord = require("discord.js")
const marsnpm = require("marsnpm")

if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

let url = await marsnpm.meme()

const adrian = new Discord.MessageEmbed()
.setImage(url)
.setColor("RANDOM")
message.channel.send(adrian)

}