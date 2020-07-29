module.exports = (client, message, args) => {  
    
const Discord = require("discord.js")

if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

let texto = args.join('%20')
if(!args[0]) return message.channel.send("!Debes escribir un mensaje¡.").then(m => {
setTimeout(function() {
m.delete()
}, 10000)
})     
let attach = (`https://gdcolon.com/tools/gdlogo/img/${texto}`)   
const embed = new Discord.MessageEmbed()   
.setImage(attach)
.setColor("RANDOM")
message.channel.send(embed)
}