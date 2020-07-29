module.exports = (client, message, args) => {

const Uzor = require("discord.js")
const comandos = args.join(" ").split(" | ")
const titulo = comandos[0]
const descripcion = comandos[1]
const color = comandos[2]
    
if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

if(!color) return message.channel.send("Debes colocar lo siguiente de esta forma. Titulo | Descripcion | Color").then(m => {
setTimeout(function() {
m.delete   
}, 5000)
})

if(!descripcion) return message.channel.send("Debes colocar lo siguiente de esta forma. Titulo | Descripcion | Color").then(m => {
setTimeout(function() {
m.delete   
}, 5000)
})
    
if(!color) return message.channel.send("Debes colocar lo siguiente de esta forma. Titulo | Descripcion | Color").then(m => {
setTimeout(function() {
m.delete   
}, 5000)
})
    
const say = new Uzor.MessageEmbed()
.setTitle(titulo)
.setDescription(descripcion)
.setColor(color)
message.channel.send(say)
}