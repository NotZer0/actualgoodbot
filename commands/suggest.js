const Discord = require('discord.js'); 
const prefix = require(`../config.json`);

module.exports.run = async (bot, message, args) => {
    let string = args.join(" ");
    console.log(string)
}

module.exports.config = {
    name: "suggest",
    description: "Suggest something",
    usage: `${prefix}suggest`,
    aliases: [""]
}