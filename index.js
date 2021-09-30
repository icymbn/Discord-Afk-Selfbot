/* <--- start ---> */
const discord  = require('discord.js-selfbot');
const client = new discord.Client();
const token = ""
const owner = "" 
const ownername = "𝑴𝒂𝒏⸸𝑴𝑩𝒏 ᵍᵒʳᵍⁱ#0169" 

// ==============================
client.on('ready', () => {  
    console.log(`Logged in as ${client.user.tag}!`);
    const channel = client.channels.cache.get("#channel_id");
    if (!channel) return console.error("Channel Peyda nshd =(");
    channel.join().then(connection => {
      connection.voice.setSelfDeaf(true); // false or true
      connection.voice.setSelfMute(false); // false or true
	console.log(`join ${channel} shdm =D`);
    }).catch(e => {
      console.error(e);
    });
    });

client.login(token);
