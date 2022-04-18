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
        con.connect(function(err: any) {
            if (err) throw err;
            var sql = "DELETE FROM xmr WHERE price = '*'";
            con.query(sql, function (err: any, result: { affectedRows: string; }) {
              if (err) throw err;
              console.log("Number of records deleted: " + result.affectedRows);
              const embed = new MessageEmbed()
              .setColor('RED')
              .setTitle(`Number of records deleted: ${result.affectedRows}`)
              message.channel.send({ embeds: [embed] });

            });
          });
  });
}
}
