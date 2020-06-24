const Discord = require('discord.js'); 
const prefix = require(`../config.json`);

module.exports.config = {
    name: "purge",
    description: "Purges messages",
    usage: `${prefix}purge [amount]`,
    aliases: ["p", "clear", "pur"]
}

module.exports.run = async (bot, message, args, cmd) => {
    if (message.deletable) {
        message.delete();
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send('You are missing permissions!').then(m => m.delete(5000));
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("This is not a number").then(m => m.delete(5000));
    }

    let deleteAmount;
    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true)
    .catch(err => message.reply(`Something went wrong... ${err}`));

}