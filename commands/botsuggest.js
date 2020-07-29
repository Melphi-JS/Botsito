module.exports = (client, message, args) => {

const Discord = require("discord.js")
    
if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

let canal = client.channels.cache.get("736770753126727780")

let sugerencia = args.join(' ')
if (!sugerencia) return message.channel.send("¿Tienes alguna sugerencia?").then(m => {
setTimeout(() => {
m.delete()
}, 4000)
})

let preenvio = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
.setDescription("**¿"+message.author.username+"** Estas seguro de mandar la sugerecia? ")
.addField("Sugerencia a enviar", sugerencia)
.setColor("RANDOM")
message.channel.send(preenvio).then(m => {
    
m.react("734319112104181811")
m.react("734319112670543913")
    
const filtro = (reaction, user) => {
return["734319112104181811","734319112670543913"].includes(reaction.emoji.id) && user.id == message.author.id
}
    
m.awaitReactions(filtro, {max: 1, time: 60000, errors: ["time"]}).catch(() => {    
m.edit("**"+message.author.username+"** no confirmaste a tiempo.") 
    
}).then(coleccionado=> {
const reaccion = coleccionado.first()
if(reaccion.emoji.id === "734319112104181811"){
let confirmado = new Discord.MessageEmbed()
.setDescription("**"+message.author.username+"** tu sugerencia fue enviada.")
.setColor("RANDOM")
m.edit(confirmado)
    
let algo = new Discord.MessageEmbed()
.setDescription(sugerencia)
.setColor("RANDOM")
canal.send(algo).then(g => {
g.react("734319112104181811")
g.react("734319112670543913")
    
})
    
} else if (reaccion.emoji.id === "734319112670543913"){
let denegado = new Discord.MessageEmbed()    
.setDescription("Haz rechazado tu sugerencia.")
.setColor("RANDOM")
message.channel.send(denegado)
    
}
})
})
}