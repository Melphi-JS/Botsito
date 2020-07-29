module.exports = (client, message, args) => {
const Discord = require('discord.js')
        
if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

let usuario = message.mentions.users.first()
let autor = message.author
let decimal = Math.random() * 20 + 1;
let numero = Math.floor(decimal);
if(!usuario){
const embed = new Discord.MessageEmbed()
.setTitle(`La Banana de ${autor.username} mide ${numero} centímetros`)
.setImage('https://cdn.discordapp.com/attachments/729502369020117055/731270491750400130/pngocean.com.png')
.setColor('ECF705')
message.channel.send(embed)
    
}else{
    
if(usuario == client.user) return message.channel.send('Si lo supieras O.o').then(m => {
setTimeout(function() {
m.delete()
}, 10000)
})
    
if(usuario.bot) return message.channel.send('No puedes realizar esta acción.').then(m => {
setTimeout(function() {
m.delete()
}, 10000)
})
    
const embed = new Discord.MessageEmbed()
.setTitle(`La Banana de ${usuario.username} mide ${numero} centímetros`)
.setImage("https://cdn.discordapp.com/attachments/729502369020117055/731270491750400130/pngocean.com.png")
.setColor('ECF705')
message.channel.send(embed)  
}
}