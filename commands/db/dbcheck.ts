const mysql = require('mysql2');
import {
    MessageEmbed,
    Message,
    Channel,
    Emoji,
} from 'discord.js';


export default {
  callback: (message: Message, ...args: string[]) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Tureet45',
        database: 'mydb',
    });
    connection.connect((err: any) => {
        if (err) {
            const exampleEmbed = new MessageEmbed()
                .setColor('RED')
                .setTitle(" ```Database is Offline ``` ")
                .setTimestamp()
                .setFooter('XMR', 'https://s2.coinmarketcap.com/static/img/coins/200x200/328.png');
            message.channel.send({ embeds: [exampleEmbed] });
            console.log("Database Check Command is used Database is Offline");
        } else {
            const exampleEmbed = new MessageEmbed()
                .setColor('ORANGE')
                .setTitle(" ``` Database is Online ``` ")
                .setTimestamp()
                .setFooter('XMR', 'https://s2.coinmarketcap.com/static/img/coins/200x200/328.png');
            message.channel.send({ embeds: [exampleEmbed] });
            console.log("Database Check Command is used Database is Online");
        }
    });
 }
}
