require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", message => {
  if (message.author.bot) return;
});

client.login();
