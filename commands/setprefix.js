module.exports = (client, message, args) => {

const db = require("megadb")
const prefix = new db.crearDB("prefixes")
let zicktron = args.join(" ")
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes permisos para este usar este comando.")
if(!zicktron) return message.channel.send("¿Cual sera mi prefix?").then(m => {
setTimeout(() => {
m.delete()
}, 4000)
})
    
message.channel.send("Prefix cambiado a **"+zicktron+"**")
prefix.establecer(message.guild.id, zicktron)
}