const Discord = require('discord.js'); 
const prefix = require(`../config.json`);

module.exports.run = async (bot, message, args) => {
    let id = args[0]

    if (id == message.id) {
        console.log('yeet')
    }
}

module.exports.config = {
    name: "approve",
    description: "Approves suggestion",
    usage: `${prefix}approve <id> [reason]`,
    aliases: [""]
}
