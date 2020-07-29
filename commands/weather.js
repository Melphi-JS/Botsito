module.exports = (client, message, args) => {
const Discord = require("discord.js")
const weather = require('weather-js')
    
if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

weather.find({search: args.join(' '), degreeType: 'C'}, function(err, result) {
if (args.length < 1) return message.channel.send("Debes ingresar una localización").then(m => {
setTimeout(() => {
m.delete()
}, 4000)
})
                      
var current = result[0].current;
var location = result[0].location;
    
const embed = new Discord.MessageEmbed()
.addField("Localización",`${current.observationpoint}`,false)
.addField("Zona Horaria", `GMT${location.timezone}`, false)
.addField("Temperatura",`${current.temperature}°${location.degreetype}`, false)
.addField("Viento", current.windspeed, false)
.addField("Humedad", `${current.humidity}%`, false)
.setColor("RANDOM")
message.channel.send({embed})
})
}