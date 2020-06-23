const Discord = require('discord.js'); 
const prefix = require(`../config.json`);

module.exports.run = async (bot, message, args) => {
    console.log(args[0])
}

module.exports.config = {
    name: "reply",
    description: "Replies to suggestion",
    usage: `${prefix}reply`,
    aliases: [""]
}