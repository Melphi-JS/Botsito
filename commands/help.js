module.exports = (client, message, args) => {

const Discord = require("discord.js")

if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

const embed = new Discord.MessageEmbed()

.setDescription("[Androssi Zahard](https://discord.com/oauth2/authorize?client_id=729456359786938488&scope=bot&permissions=388160)\nHola, soy **Androssi Zahard** y mi Prefix es `an!`, Pero puedes cambiarlo con el comando `setprefix`. Puedes ver mi lista de comandos con `comandos` y puedes unirte a nuestro servidor de discord!.")
.addField("Comandos de Admin/Mod", "`hackban` `ban` `unban` `kick` `clean`")
.addField("Comando de Configuración","`setprefix` `giveaway` `renamechannel`")
.addField("Comandos de Diversion","`say` `embedsay` `sayimage` `reverse` `ascii` `banana` `choose` `ttt` `meme`")
.addField("Comandos de Utilidad","`ping` `calc` `weather` `avatar` `iconserver` `translate` `randomuser`")
.addField("Comandos de Información"," `help` `botsuggest` `stats` `userinfo` `emoji`")
.setFooter(`Disfruta de nuestro Bot!`, client.user.displayAvatarURL())
.setColor("RANDOM")
message.channel.send(embed)
}   