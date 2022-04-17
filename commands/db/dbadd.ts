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
        console.log("Connected!");
        //when command typed get variable date and price
        var date = args[0];
        var price = args[1];
        //insert date and price into database
        con.query("INSERT INTO xmr (date, price) VALUES ('" + date + "', '" + price + "')", function (err: any, result: any, fields: any) {
          if (err) throw err;
          console.log("1 record inserted");
          //send embed with result
            const exampleEmbed = new MessageEmbed()
            .setColor('YELLOW')
            .setTitle(`1 record inserted`)
            message.channel.send({ embeds: [exampleEmbed] });

        });
      });
  }
}
