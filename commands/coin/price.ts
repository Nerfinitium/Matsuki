import CoinGecko from 'coingecko-api';
const CoinGeckoClient = new CoinGecko();
import {
    
    MessageEmbed,
    Message,
    Channel,
    Emoji,

} from 'discord.js';


export default {
     
    name: 'price',
    description: 'Get the price of a coin',

    callback: (message: Message, ...args: string[]) => {
      console.log(args)
       
      //GET /simple/price
      CoinGeckoClient.simple.price({
        ids: 'monero',
        vs_currencies: 'usd'
      }).then(data => {
        const exampleEmbed = new MessageEmbed()

        .setColor('ORANGE')
        .setTitle(`:coin: XMR Price is ${data.data.monero.usd}$`)
        .setTimestamp()
        .setFooter('XMR', 'https://s2.coinmarketcap.com/static/img/coins/200x200/328.png');     
        message.channel.send({ embeds: [exampleEmbed] });
        console.log("Price command is used");
        

      });
      
    },

      
        
     

  }


