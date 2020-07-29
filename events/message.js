module.exports = async (client, message) => { 

const db = require("megadb")
const prefix = new db.crearDB("prefixes")
const prefixes = prefix.has(message.guild.id) ? await prefix.get(message.guild.id) : "an!"

if(!message.content.startsWith(prefixes)) return; 
if(message.author.bot) return;
                
const args = message.content.slice(prefixes.length).trim().split(/ +/g);  
const command = args.shift().toLowerCase()
                  
let cmd = client.command.get(command); 
if(!cmd) return;
                
let blacklist = []
if(blacklist.includes(message.author.id)) return message.channel.send("Estas en la Blackist.")
cmd(client, message, args)
}