module.exports = (client, message, args) => {

const Discord = require("discord.js")

if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

var respuestas = ["Sí", "No", "Tal vez", "No sé", "¡Claro!","Maybe"]
var aleatorio = respuestas[Math.floor(Math.random() * respuestas.length)]
    
let pregunta = args.slice(1).join(' ')
if(!pregunta) return message.channel.send('Debe escribir una pregunta >n<').then(m => {
setTimeout(() => {
m.delete()
}, 4000)
})

const ball = new Discord.MessageEmbed()
.setTitle(":8ball: Endorsi 8ball")
.setColor("RANDOM")
.addField(message.author.username + " Pregunta", pregunta)
.addField("Mi respuesta es", aleatorio)
message.channel.send(ball)
}