module.exports = async (client, message, args) => {

const Discord = require("discord.js")
const ttt = require("tresenraya")
const user = message.mentions.users.first()
        
if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

if(!user) return message.channel.send(`Necesitas mencionar a alguien.`)
if(user.bot) return message.channel.send("Aún no se puede jugar contras bots.")
        
if(user.id === message.author.id) return message.channel.send(`No puedes jugar contra ti mismo.`)
if(ttt.partidas.includes(message.guild.id)) return message.channel.send(`Ya hay un juego iniciado en este servidor.`)
      
const algo = new Discord.MessageEmbed()
.setDescription(`<@!${user.id}>! **${message.author.tag}** te envió una solicitud para jugar 3 en raya. Puede aceptarlo escribiendo ** Si ** o rechazarlo escribiendo ** No **.`)
.setColor("RANDOM")
message.channel.send(algo)  
    
const filter = m => m.content && m.author.id == user.id
const acceptcollect = message.channel.createMessageCollector(filter, { max: 1000, time: 60000 })
    
acceptcollect.on("collect", m => {
if(m.content.toLowerCase().startsWith("no")){
const nope = new Discord.MessageEmbed()
.setDescription(`<@!${m.author.id}> Haz rechazado **${message.author.username}** la propuesta de juego.`)
.setColor("RANDOM")
message.channel.send(nope)
acceptcollect.stop()
          
} else if(m.content.toLowerCase().startsWith("si")){

if(ttt.partidas.includes(message.guild.id)) return message.channel.send(`Ya hay un juego activo en este servidor.`), acceptcollect.stop()   
const game = new ttt.partida({ jugadores: [user.id, message.author.id], fichas: ["⚔️", "🛡️"], tablero: [ "<:One:735030145211170866>", "<:Two:735030144720437318>", "<:TresXD:735030144615579709>", "<:Four:735030144518979707>", "<:Five:735030144841941033>", "<:Six:735030144804061274>", "<:Seven:735030144485294122>", "<:eight:735030144946929724>", "<:Nine:735030144720306197>" ], id: message.guild.id })      
      
message.channel.send(`Que empieze el juego, ${message.guild.member(game.turno.jugador)}.`)
acceptcollect.stop()
game.on('empate', (jugadores, tablero, paso) => {
const em2 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Tres En Raya", `${client.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 })}`)
.setTitle(`Lastimosamente han empatado.`)
.setDescription(`**Tablero final**\n${tablero.string}`)
message.channel.send(em2);
          
});
      
game.on('ganador', (jugador, tablero, paso) => {
const em3 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`Tres En Raya`, `${client.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 })}`)
.setTitle(`Hmmm.. Al parecer tenemos un ganador`)
.setDescription(`**Tablero final**\n${tablero.string}`)
.addField(`Ganador`, `${client.users.resolve(jugador).username}`, true)
.addField("Perdedor", `${client.users.resolve(game.perdedor).username}`, true)
.addField(`\u200b`, `\u200b`, true)
message.channel.send(em3);
});
    
const em4 = new Discord.MessageEmbed()
.setColor("FD0061")
.setAuthor(`Tres En Raya`, `${client.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 })}`)
.setDescription(`**Tablero:**\n${game.tablero.array.slice(0, 3).join("")}\n${game.tablero.array.slice(3, 6).join("")}\n${game.tablero.array.slice(6, 9).join("")}`)
.addField(`Tu Empiezas`, `${client.users.resolve(game.turno.jugador).username}`, true)
.addField(`\u200b`, `\u200b`, true)
message.channel.send(em4).then(msgboard => {
      
const gamecollect = message.channel.createMessageCollector(msg => msg.author.id === game.turno.jugador && !isNaN(msg.content) && (Number(msg.content) >= 1 && Number(msg.content) <= 9) && game.disponible(msg.content) && !game.finalizado)
gamecollect.on('collect', (gamemsg) => {
game.elegir(parseInt(gamemsg.content))
      
const otherp = game.opciones.jugadores
const otherpl = otherpi => otherpi == game.turno.jugador
const otherplindex = otherp.findIndex(otherpl)
const otherplayer = otherp[otherplindex]
        
if(parseInt(game.turno.paso) < 9) {
const aweno = new Discord.MessageEmbed()
.setDescription(`Es tu turno ${message.guild.member(otherplayer)}`)
.setColor("B693F3")
message.channel.send(aweno).then(gm => gm.delete({ timeout: 5000 }))
}
    
if(game.finalizado) {
         
stopcollect.stop()
gamecollect.stop()
gamemsg.delete()
msgboard.delete()
return
}
      
const winch = game.opciones.jugadores
const winchan = otherpi => otherpi == game.turno.jugador
const winchanceindex = winch.findIndex(winchan)
const winchance = winch[winchanceindex]
const winchances = game.posibilidades[winchance.toString()]
      
const em5 = new Discord.MessageEmbed()
.setColor("FD0061")
.setAuthor(`Tres En Raya`, `${client.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 })}`)
.setDescription(`**Tablero:**\n${game.tablero.string}`)
.addField(`Turno`, `${client.users.resolve(game.turno.jugador).username}`, true)
.addField(`\u200b`, `\u200b`, true)   
.addField(`Ficha`, `${game.turno.ficha}`, true)
.addField("Movimientos", `${game.turno.paso}`, true)
msgboard.edit(em5)
gamemsg.delete()
      
})
});
      
const filter2 = m => m.content && (m.author.id == user.id || m.author.id == message.author.id) 
const stopcollect = message.channel.createMessageCollector(filter2)
    
stopcollect.on("collect", msg => {
if(msg.author.id.toString() == game.turno.jugador.toString()) return;
if(msg.content.toLowerCase().startsWith("stop")){
const efesita = new Discord.MessageEmbed()
.setDescription(`**${msg.author.username}** a Parado el juego \<a:SHHHHH:719076589765394483>`)
.setColor("RANDOM")
message.channel.send(efesita)
stopcollect.stop()
game.finalizar()
        
}    
})
} 
})
}
      
    