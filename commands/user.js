const { SlashCommandBuilder, PermissionFlagsBits } = require("@discordjs/builders");
const moment = require('moment');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("프로필")
        .setDescription("유저의 프로필을 보여줍니다.."),

    async execute(interaction) {
        console.log(interaction);
        const embed = {
            color: 0x0099ff,
            description: `${interaction.user} 님의 정보`,
            fields: [
                {
                    name: '유저 이름',
                    value: interaction.user.username,
                    inline: true,
                },
                {
                    name: '유저 태그',
                    value: "#" + interaction.user.discriminator,
                    inline: true,
                },
                {
                    name: '유저 아이디',
                    value: interaction.user.id,
                    inline: true,
                },
                {
                    name: '가입한 날',
                    value: moment.utc(interaction.user.createdAt).add(9, 'h').format("YYYY년, MM월 DD일"),
                    inline: true,
                },
                {
                    name: '\0',
                    value: '\0',
                    inline: true,
                },
                {
                    name: '들어온 날(수정중)',
                    value: moment.utc(interaction.user.joinedAt).add(9, 'h').format("YYYY년, MM월 DD일"),
                    inline: true,
                },
            ],
            timestamp: new Date().toISOString(),
            thumbnail: {
                url: interaction.user.displayAvatarURL(),
                size: 1080,
                format: "png",
                dynamic: true,
            },
            /*image: {
                url: interaction.user.displayAvatarURL(),
                size: 1080,
                format: "png",
                dynamic: true,
            },*/
            footer: {
              text: '© 2022 Disturbed#7436. All Rights Reserved',
              icon_url: 'https://i.imgur.com/Uu4gEhV.png',
            },
        };

        await interaction.reply({ embeds: [embed] });
    },
};