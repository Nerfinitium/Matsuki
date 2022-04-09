import {
    
    MessageEmbed,
    Message,
    Channel,

} from 'discord.js';


export default {
    callback: (message: Message, ...args: string[]) => {
        console.log(args)
        const exampleEmbed = new MessageEmbed()
    .setColor('#0099ff')
	.setTitle('Some title')
    .setDescription('Some description here')
     
       message.channel.send({ embeds: [exampleEmbed] });

     
    },
}
