import { Message } from "discord.js";

export default {
    callback: (message: Message, ...args: string[]) => {
        console.log(args)

        //send message latency to console
        message.channel.send(`Latency is ${message.createdTimestamp - Date.now()}ms:satellite_orbital:`)
    },
}