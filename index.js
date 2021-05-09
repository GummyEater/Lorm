// https://discord.com/api/oauth2/authorize?client_id=840773916750118953&permissions=8&scope=bot%20applications.commands

const DiscordJS = require("discord.js");
const CommandManager = require("./commands/CommandManager");
require("dotenv").config();

const client = new DiscordJS.Client();

client.on("ready", async () => {
  console.log("The bot is ready.");
  CommandManager.initClient(client);

  // Initialize Commands
  CommandManager.clearOldCommandsThenInit(client);
});

CommandManager.listenForCommands(client, DiscordJS);

client.login(process.env.TOKEN);
