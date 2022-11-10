const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("봇의 핑, 업타임을 알려줍니다."),
    async execute(interaction) {
        await interaction.reply("pong!");
    },
};