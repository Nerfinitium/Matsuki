import DJS, { Intents } from 'discord.js';
import { MessageEmbed } from "discord.js";
var XMLHttpRequest = require('xhr2');

const client = new DJS.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

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
    var price = response.data.priceUsd;
      changepercent24hr = changepercent24hr.substring(0, 4);  

console.log(changepercent24hr.substring(0, 4));      

client.on('ready', () => {
    let handler = require('./command-handler')
    if (handler.default) handler = handler.default
  


    
    handler(client)
})}}

client.login("NAH")

