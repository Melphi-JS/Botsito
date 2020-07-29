module.exports = (client, message, args) => {

    const Discord = require("discord.js")
    const ping = new Discord.MessageEmbed()
    .setDescription("Espere un momento...")
    .setColor("RANDOM")
    message.channel.send(ping).then(m => {
    setTimeout(() => {
    
    const algo = new Discord.MessageEmbed()
    .setDescription(`:incoming_envelope:  Envío de mensajes: **${m.createdTimestamp - message.createdTimestamp} ms.**\n:satellite_orbital: DiscordAPI: **${client.ws.ping} ms.**`)
    .setColor("RANDOM")
    m.edit(algo)
    }, 5000)
    })
}