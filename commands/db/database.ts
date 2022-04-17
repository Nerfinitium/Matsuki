const mysql = require('mysql2');
import {
    
  MessageEmbed,
  Message,
  Channel,

} from 'discord.js';


export default {
  callback: (message: Message, ...args: string[]) => {
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Tureet45",
      database: "mydb"
    });
    
    con.connect(function(err: any) {
      if (err) throw err;
      con.query("SELECT * FROM xmr", function (err: any, result: any, fields: any) {
        if (err) throw err;
        console.log(result);
        //send embed with result
        const exampleEmbed = new MessageEmbed()
        .setColor('ORANGE')
        .setTitle(`Price is ${result[0].price}`)
        .setFooter('XMR', 'https://s2.coinmarketcap.com/static/img/coins/200x200/328.png');
        message.channel.send({ embeds: [exampleEmbed] });
      });
    });
  }
}
