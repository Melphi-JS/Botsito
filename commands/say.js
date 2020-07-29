module.exports = (client, message, args) => { 

const txt = args.join(" ")
if(!txt) {
return message.channel.send("Tienes que escribir un texto").then(m => {
setTimeout(() => {
m.delete()
}, 4000)
})

} else {
    
message.channel.send(`${txt}`, { disableMentions: "all" })
    
}
        
message.delete()
    
}
    