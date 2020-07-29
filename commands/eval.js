module.exports = async (client, message, args) => {

const Discord = require("discord.js")
if (!["534951970310586378"].includes(message.author.id)) return message.channel.send("._.")
let limite = 950
try {
    
let code = args.join(" ")
let evaluado = await eval(code)
if (typeof evaluado !== "string")
evaluado = require("util").inspect(evaluado)
let txt = "" + evaluado
    
if (txt.length > limite) {
const evalo = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.displayAvatarURL())
.setTitle("Eval")
.addField("Tiempo de Respuesta", `\`\`\`md\n< ${client.ws.ping}ms >\n\`\`\``, true)
.addField("📥 | Entrada",`\`\`\`js\n${args.join(" ")}\n\`\`\``)
.addField("📤 | Salida",`\`\`\`js\n ${txt.slice(0, limite)}\n\`\`\``)
.setColor("RANDOM")
message.channel.send(evalo)
    
} else
    
var embed = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.displayAvatarURL())
.setTitle('Evaluacion Lista')
.addField("Tiempo de Respuesta", `\`\`\`md\n< ${client.ws.ping}ms >\n\`\`\``, true)
.addField("📥 | Entrada", `\`\`\`js\n${args.join(" ")}\n\`\`\``)
.addField("📤 | Salida", `\`\`\`js\n ${txt}\n\`\`\``)
.setColor("F7E077")
message.channel.send(embed)} 
    
catch (err) {
    
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.displayAvatarURL())
.setTitle("🚨 | Error")
.addField("Tiempo de Respuesta", `\`\`\`md\n< ${client.ws.ping}ms >\n\`\`\``, true)
.addField("📥 | Entrada", `\`\`\`js\n${args.join(" ")}\n\`\`\``)
.addField("📤 | Salida", `\`\`\`js\n ${err}\n\`\`\``)
.setColor("RANDOM")
message.channel.send(embed)
    
}
}
    