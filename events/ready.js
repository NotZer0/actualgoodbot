const Discord = require('discord.js'); 

module.exports = bot => {
    console.log(`[LOGS] ${bot.user.username} is online`)
    
    bot.user.setActivity(`${bot.users.cache.size} users!`,{type: "WATCHING"})
}