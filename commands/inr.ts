

import {
    
    MessageEmbed,
    Message,
    Channel,
    Emoji,

} from 'discord.js';

var XMLHttpRequest = require('xhr2');

export default {
     

    callback: (message: Message, ...args: string[]) => {
      console.log(args)

      const Http = new XMLHttpRequest();
      const url='https://api.coincap.io/v2/assets/monero';
      Http.open("GET", url);
      Http.send();
      
      Http.onreadystatechange = () => {
        console.log(Http.responseText)
        //send embed
        const exampleEmbed = new MessageEmbed()
        
       .setColor('ORANGE')
        .setTitle('Monero')
        .setDescription(` ${Http.responseText}`)
        .setTimestamp()
        .setFooter('XMR', 'https://s2.coinmarketcap.com/static/img/coins/200x200/328.png');
        message.channel.send({ embeds: [exampleEmbed] });


      }


     }
}
