

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
      }
//get changepercent24hr from the response and convert it to a 2 decimal place number
      Http.onreadystatechange = () => {
        if (Http.readyState == 4 && Http.status == 200) {
          var response = JSON.parse(Http.responseText);
          var changepercent24hr = response.data.changePercent24Hr;
          var changepercent24hr2decimal = changepercent24hr.toFixed(2); // an error is happening here on .tofixed(2)
          console.log(changepercent24hr2decimal)

// sending embed 
      const exampleEmbed = new MessageEmbed()
      .setColor('ORANGE')
       .setTitle('Monero')
       //ChangePercentage24hr
       .setDescription(`the chnage percentage is ${changepercent24hr}%`)
       .setTimestamp()
       .setFooter('XMR', 'https://s2.coinmarketcap.com/static/img/coins/200x200/328.png');
       message.channel.send({ embeds: [exampleEmbed] });
     }
     
}
}
}
