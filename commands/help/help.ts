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
    .setDescription('```This is the Main Commands Menu```')
    .addFields( 
        { name: '`graph max`', value: '**Shows Year Chart of XMR**' },
        { name: '`graph month`', value: '**Shows Month Chart of XMR**' },
        { name: '`price`', value: '**Shows Price of XMR to usd** ' },
        { name: '`inr`', value: '**Shows decrease or increase of XMR**' },
        { name: '`ping`', value: '**pings the bot**' },
        { name: '`servers`', value: '**send the status of servers**' },
        { name: '`dbcheck`', value: '*Checks the database**' },
    )
    .addField('Tip', 'There is Easter eggs in this bot i hope you will find them')
    .setTimestamp()
    .setFooter('XMR', 'https://s2.coinmarketcap.com/static/img/coins/200x200/328.png');
       message.channel.send({ embeds: [exampleEmbed] });

     
    },
}
