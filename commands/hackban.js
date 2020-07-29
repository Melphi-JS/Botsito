module.exports = async (client, message, args) => {

if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

let permisos = message.member.hasPermission("BAN_MEMBERS") //Verificamos si el autor del comando tiene permisos para banear
if (!permisos) return message.channel.send("No tienes permisos para usar este comando.").then(m => { //Si no tiene permisos, le saldra el siguiente mensaje
setTimeout(function() {
m.delete()
}, 10000)
})
    
let permisosbot = message.guild.me.hasPermission("BAN_MEMBERS") //Verificamos si el bot tiene permisos
if (!permisosbot) return message.channel.send("No tengo permisos para banear :(").then(m => { //Si el bot no tiene permisos
setTimeout(function() {
m.delete()
}, 10000)
})
    
let id = args.join(" ") //La id del usuario al caul vamos a banear :(
if (!id) return message.channel.send("Necesitas colocar la id.").then(m => { //Si no coloca la id
setTimeout(function() {
m.delete()
}, 10000)
})
        
let member = await client.users.fetch(id)
message.guild.members.ban(member.id) //Aqui el usuario oficialmente partio al mundo de los muertos :(
message.channel.send("El usuario **"+member.username+"** Fue baneado")
}
    
    //Acuerdense del async