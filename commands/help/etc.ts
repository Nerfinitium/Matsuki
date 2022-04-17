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
	.setTitle('Welcome To Help Menu')
    .setDescription('```Welcome to The Hidden Help Menu```')
    .addFields( 
        { name: '`stonks`', value: 'Show increase decrease with stonks meme' },
        { name: '`devs`', value: 'shows developers' },
        { name: '`book`', value: 'a signed book from a developer' },
    )
    .setTimestamp()
    .setFooter('XMR', 'https://s2.coinmarketcap.com/static/img/coins/200x200/328.png');
       message.channel.send({ embeds: [exampleEmbed] });

     
    },
}
