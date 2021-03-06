const Discord = require('discord.js'); 
const prefix = require(`../config.json`);

module.exports.run = async (bot, message, args) => {
    let string = args.join(" ");
    if (string) {
        message.delete()
        message.channel.send('Your suggestion has been noted and sent!')

        let Schannel = bot.channels.cache.find(ch => ch.name === "suggestions"); 

        if (!Schannel) return message.channel.send('There is no suggestion channel!'); 

        let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setTitle(`Suggestion Log`)
        .setDescription(string)
        .setColor('#7289da')
        Schannel.send(embed).then(m => {
            m.react('⬆️')
            m.react('⬇️')
        })
    }
}

module.exports.config = {
    name: "suggest",
    description: "Suggest something",
    usage: `${prefix}suggest [suggestion]`,
    aliases: [""]
}