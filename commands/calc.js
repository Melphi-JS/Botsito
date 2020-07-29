module.exports = (client, message, args) => {
const Discord = require("discord.js")
    
const calculadora = require("math-expression-evaluator")

if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

const problema = args.join(" ")
    
if (!problema) return message.channel.send("¿Que vas a calcular?").then(m => {
setTimeout(() => {
m.delete()
}, 4000)
})

let resultado
try {
resultado = calculadora.eval(problema)
} catch (e) {
resultado = "No puedo calcular eso"
}
const calculado = new Discord.MessageEmbed()
.addField("Problema:", `\`\`\`\n${problema}\`\`\``, false)
.addField("Resultado", `\`\`\`\n${resultado}\`\`\``, false)
.setColor("EC5373")
message.channel.send(calculado)
}