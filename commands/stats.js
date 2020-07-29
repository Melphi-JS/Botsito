module.exports = (client, message, args) => {

const Discord = require("discord.js")
const moment = require("moment")
require('moment-duration-format')
        
let usuarios = client.users.cache.size 
let canales = client.channels.cache.size
let servidores = client.guilds.cache.size
let comandos = client.command.size
let memoria = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
let tiempo = moment.duration(client.uptime).format("D [dias], H [hora], m [minutos], s [segundos]").replace('minsutos', 'minutos')
        
if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

const stats = new Discord.MessageEmbed()
        
.setAuthor("Leonardo Watch", client.users.resolve("729456359786938488").displayAvatarURL())
.setTitle("Estadisticas de Leonardo Watch")
.addField("Usuarios", `${usuarios}`, true)
.addField("Servidores", `${servidores}`, true) 
.addField("Canales", `${canales}`, true)
.addField("Comandos", `${comandos}`, true)
.addField("Tiempo Online", `${tiempo}`, true)
.addField("Memoria", `${memoria}MB`, true)
.setColor("F57070")
message.channel.send(stats)
}
        
        