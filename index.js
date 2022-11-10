const { Client, Collection, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");
const fs = require("fs");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandFiles = fs
    .readdirSync("./commands")
    .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.once("ready", () => {
    console.log("Bot ready!");
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: "이 명령을 실행하는 동안 오류가 발생했습니다!",
                ephemeral: true,
        });
    }
});

client.login(token);