module.exports = (client, message, args) => {
const figlet = require('figlet')

if (!args[0]) return message.reply("Debe escribir un texto.").then(m => {
setTimeout(() => {
m.delete()
}, 4000)
})

if (args[0] > 6) return message.channel.send("El texto no debe tener mas de 6 letras.").then(m => {
setTimeout(() => {
m.delete()
}, 4000)
})

if (args.join(" "))
figlet(args.join(" "), (err, data) => message.channel.send("```" + data + "```"))
}