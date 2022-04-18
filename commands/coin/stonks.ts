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



        if (changepercent24hr > 1) {
            const embed1 = new MessageEmbed()
            .setColor('ORANGE')
            .setTitle(` 📈 chanage percentage is ${changepercent24hr}%`)
            .setTimestamp()
            .setImage('https://bordoklavyeli.net/wp-content/uploads/2019/08/stonks.jpg')
            .setFooter('XMR', 'https://s2.coinmarketcap.com/static/img/coins/200x200/328.png');
       message.channel.send({ embeds: [embed1] });
        }

        if (changepercent24hr < 0) {
          const embed2 = new MessageEmbed()
       .setColor('RED')
       .setTitle(` 📉 chanage percentage is ${changepercent24hr}%`)
       .setTimestamp()
       .setImage('http://images7.memedroid.com/images/UPLOADED333/5fe0de2ad6e08.jpeg')
       .setFooter('XMR', 'https://s2.coinmarketcap.com/static/img/coins/200x200/328.png');
       message.channel.send({ embeds: [embed2] });
        }
      
        }
        }
   }
}

    

