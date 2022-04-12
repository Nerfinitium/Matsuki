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
      Http.onreadystatechange = () => {
        if (Http.readyState == 4 && Http.status == 200) {
          var response = JSON.parse(Http.responseText);
          var changepercent24hr = response.data.changePercent24Hr;
            changepercent24hr = changepercent24hr.substring(0, 4);  

console.log(changepercent24hr.substring(0, 4));      
const exampleEmbed = new MessageEmbed()

      .setColor('ORANGE')
       .setTitle(` 📈 chanage percentage is ${changepercent24hr}%`)
       .setTimestamp()
       .setFooter('XMR', 'https://s2.coinmarketcap.com/static/img/coins/200x200/328.png');
       message.channel.send({ embeds: [exampleEmbed] });

       //if changepercent24hr < 0 then send embed
        if (changepercent24hr < 0) {
          const exampleEmbed = new MessageEmbed()
       .setColor('RED')
       .setTitle(` 📉 chanage percentage is ${changepercent24hr}%`)
       .setTimestamp()
       .setFooter('XMR', 'https://s2.coinmarketcap.com/static/img/coins/200x200/328.png');
       message.channel.send({ embeds: [exampleEmbed] });
        }
     }
  }
 }
}
