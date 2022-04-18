var XMLHttpRequest = require('xhr2');
import {
    
    MessageEmbed,
    Message,
    Channel,
    Emoji,

} from 'discord.js';


export default {
    callback: (message: Message, ...args: string[]) => {
      console.log(args)
       //send ping to ip address
         var Http = new XMLHttpRequest();
            var url='https://api.coincap.io/v2/assets/monero';
            Http.open("GET", url);
            Http.send();
            //if response is 200
            Http.onreadystatechange = () => {
                //send embed
                if (Http.readyState == 4 && Http.status == 200) {
                    const exampleEmbed = new MessageEmbed()
                    .setColor('ORANGE')
                    .setTitle(" ``` All Servers Are Online! ``` ")
                    .setTimestamp()
                    .setFooter('XMR', 'https://s2.coinmarketcap.com/static/img/coins/200x200/328.png');
                    message.channel.send({ embeds: [exampleEmbed] });
                    console.log("Server Check Command is used Servers are Online");
        }
        if (Http.readyState == 4 && Http.status < 200) { 
        {
            const exampleEmbed = new MessageEmbed()
            .setColor('RED')
            .setTitle(" ```Servers are OFFLINE ``` ")
            .setTimestamp()
            .setFooter('XMR', 'https://s2.coinmarketcap.com/static/img/coins/200x200/328.png');
            message.channel.send({ embeds: [exampleEmbed] });
            console.log("Server Check Command is used Servers are Offline");
        }
    }

} 
 }

}    


