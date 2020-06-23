const Discord = require('discord.js'); 
const prefix = require(`../config.json`);

module.exports.run = async (bot, message, args) => {
    const m = await message.channel.send("Pong?")
    m.edit(`Pong!\n**Your ping:** ${m.createdTimestamp - message.createdTimestamp}ms`)
}

module.exports.config = {
    name: "ping",
    description: "Calculates ping",
    usage: `${prefix}ping`,
    aliases: ["ping"]
}