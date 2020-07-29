module.exports = (client) => {
    
let array = ["Androssi Zahard"]
    
setInterval(() => {
    
client.user.setPresence( {activity: { name: array[Math.floor(Math.random() * (array.length))], type: "WATCHING" }, status: "iddle" });
}, 6500)
}