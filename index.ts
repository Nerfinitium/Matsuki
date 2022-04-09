import DJS, { Intents } from 'discord.js';
import { MessageEmbed } from "discord.js";

const client = new DJS.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.on('ready', () => {
    let handler = require('./command-handler')
    if (handler.default) handler = handler.default
    
    handler(client)
})

client.login("TOKEN")
