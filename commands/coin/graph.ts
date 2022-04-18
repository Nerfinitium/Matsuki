 import chartjs from 'chart.js';
import {
    
    MessageEmbed,
    Message,
    Channel,
    Emoji,

} from 'discord.js';
import sql from 'sql-template-strings';
import mysql from 'mysql';

export default {
    callback: (message: Message, ...args: string[]) => {
        var con = mysql.createConnection({
            host: "localhost",
            user: "yourusername",
            password: "yourpassword",
            database: "mydb"
          });
          
          con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT * FROM customers", function (err, result, fields) {
              if (err) throw err;
              console.log(result);
            });
          });
    }
}
