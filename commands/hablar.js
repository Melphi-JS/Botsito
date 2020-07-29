module.exports = (client, message, args) => {

const bot = require("espchatbotapi")
const hablar = args.join(" ")
    
if (!hablar) return message.channel.send("Quieres hablar, pero no me dijiste nada uwu.")
message.channel.startTyping()
bot.hablar(hablar).then(respuesta => {
message.channel.stopTyping()
message.channel.send(respuesta)
        
})
    
.catch(error => { 
console.log(error)
message.channel.send('Error en el comando, inténtalo de nuevo')
message.channel.stopTyping()
})
}