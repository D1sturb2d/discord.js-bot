const { SlashCommandBuilder } = require("@discordjs/builders");
const moment = require('moment');
const {
  message,
  MessageActionRow,
  MessageSelectMenu,
  MessageEmbed,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("시간")
    .setDescription("서버 정보를 알려드립니다.(KST 기준)"),
  async execute(interaction) {
    //날짜 & 시간 불러오기
    var d = new Date();
	  var liveData = d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 ";
    var liveTime = d.getHours() + "시 " + d.getMinutes() + "분 ";
    
    const embed = {
      color: 0x0099ff,
      description: '현재 시간은 ' + liveData + liveTime +' 입니다. (KST 기준)',
      timestamp: new Date().toISOString(),
      footer: {
        text: '© 2022 Disturbed#7436. All Rights Reserved',
        icon_url: 'https://i.imgur.com/Uu4gEhV.png',
      },
    };

    await interaction.reply({ embeds: [embed] });
  },
};