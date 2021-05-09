const getApp = (guildId, clientIn) => {
  const app = clientIn.api.applications(clientIn.user.id);
  if (guildId) {
    app.guilds(guildId);
  }
  return app;
};

const initCommand = async (guildId, clientIn) => {
  await getApp(guildId, clientIn).commands.post({
    data: {
      name: "testlorm",
      description: "A simple ping pong command",
    },
  });
};

const runCommand = async (clientIn, sender, channelId, guildId, interaction) => {
  clientIn.api.interactions(interaction.id, interaction.token).callback.post({
    data: {
      type: 4,
      data: {
        content: "Pong!",
      },
    },
  });
};

module.exports = { testPong: { initCommand, runCommand } };
