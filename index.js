const { Client, INTENTS, DiscordEmbed } = require('lgcord.js') // Importing the classes from the library

const client = new Client([
    INTENTS.GUILDS, // For the guilds cache
    INTENTS.GUILD_MESSAGES // For the bot to receive messages
]) // Constructing the client

client.on("ready", ready => {
    console.log(`Logged in as ${ready.user.username}`) // When the bot is ready, logginto console
}) // New ready listener. 

// Creating a new global variable
client.config = require('./config.json')

/**
 * @MessageCreate-Listener
 * For bot to reply to messages. MessageCreate is a listener that is triggered when a message is created.
 */

client.on("messageCreate", message => {
    let prefix = client.config.prefix // Getting the prefix from the config file
    if (message.content.startsWith(prefix + "ping")) { // If the message starts with the prefix + ping
        message.reply(`Pong!`) // Replying to the message
    }
    if (message.content.startsWith(prefix + "embed")) { // If the message starts with the prefix + embed
        let e = new DiscordEmbed()
            .setTitle("Hello World")
            .setColor("Color")
            .setDescription('Bot using lgcord.js')
            .setFooter('Footer')
            .setTimestamp()

        message.reply({
            embeds: [e]
        }) // Sending our embed.
    }
})


client.login(client.config.token) // Logging in with the token