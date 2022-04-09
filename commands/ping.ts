import {
    
    MessageEmbed,
    Message,
    Channel,

} from 'discord.js';


export default {
    callback: (message: Message, ...args: string[]) => {
        console.log(args)
        const exampleEmbed = new MessageEmbed()
    .setColor('ORANGE')
	.setTitle(`Latency is ${message.createdTimestamp - Date.now()}ms:satellite_orbital:`)
       message.channel.send({ embeds: [exampleEmbed] });
    },
}
