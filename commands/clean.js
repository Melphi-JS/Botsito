module.exports = (client, message, args) => {

const Discord = require("discord.js")

if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

let puto = message.member.permissions.has("ADMINISTRATOR")
if(!puto) return message.channel.send("No tienes permisos")

let maggikputo = args[0]
if(!maggikputo) return message.reply("Cuantos mensajes vas a eliminar.")
if (maggikputo > 100) return message.channel.send("No puedes eliminar mas de 100 mensajes.")

let confirmar = new Discord.MessageEmbed()
.setDescription("**¿"+message.author.username+"** Esta seguro de eliminar **"+args+"** mensajes?")
.setColor("RANDOM")
message.channel.send(confirmar).then(m => {

m.react("734319112104181811")
m.react("734319112670543913")
    
const filtro = (reaction, user) => {
return ["734319112104181811", "734319112670543913"].includes(reaction.emoji.id) && user.id == message.author.id;
};
    
m.awaitReactions(filtro, {max: 1, time: 60000, errors: ["time"]}).catch(() => {
m.edit("No confirmaste a tiempo.")
    
}).then(coleccionado=> {
    
const reaccion = coleccionado.first()
if(reaccion.emoji.id === "734319112104181811") {
message.channel.bulkDelete(maggikputo)

let consha = new Discord.MessageEmbed()
.setDescription("**"+message.author.username+"** eliminaste **"+maggikputo+"** mensajes.")
.setColor("RANDOM")
m.edit(consha)
    
} else if(reaccion.emoji.id === "734319112670543913") {
let entiendo = new Discord.MessageEmbed()
.setDescription("El comando ha sido cancelado")
.setColor("RANDOM")
m.edit(entiendo)
}
})
})
}