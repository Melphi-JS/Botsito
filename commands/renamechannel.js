
module.exports = (client, message, args) => {

let channel = message.mentions.channels.first()
let permiso = message.member.hasPermission("MANAGE_CHANNELS")
  
if(!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.channel.send("No tengo permisos suficiente.")

if (!channel) return message.channel.send(`Menciona un canal`).then(m => {
setTimeout(function() {
m.delete()
}, 10000)
})
    
if(!permiso) return message.channel.send("Te faltan permisos.").then(m => {
setTimeout(function() {
m.delete()
}, 10000)
})
    
if (args.slice(1).join(' ').length <= 0) return message.channel.send(`Coloca un nombre para el canal!`).then(m => {
setTimeout(function() {
m.delete()
}, 10000)
})
    
channel.edit({ name: args.slice(1).join(' ') })
message.channel.send(`Nuevo nombre | ${args.slice(1).join(' ')}`)
}