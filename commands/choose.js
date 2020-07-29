module.exports = (client, message, args) => {
const Discord = require("discord.js")
    
if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

let one = args[0]
let two = args[1]
let tre = args[2]
let cua = args[3]
let cin = args[4]
    
if (!one) return message.channel.send("Ingrese 2 o mas palabras.").then(m => {
setTimeout(() => {
m.delete()
}, 4000)
})

var random = args[Math.floor(Math.random() * args.length)]
    
const embed = new Discord.MessageEmbed()
.setDescription("**"+message.author.username+"** Prefiero Hmmm... **"+random+"**")
.setColor("RANDOM")
message.channel.send(embed)
}
    
    
    
    