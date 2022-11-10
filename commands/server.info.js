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
    .setName("서버")
    .setDescription("서버 정보를 알려드립니다."),
  async execute(interaction) {
    //서버 이름
    const servername = interaction.guild.name;
    //서버 로고
    const sicon = interaction.guild.iconURL();

    //서버 정보
    let owner = await interaction.guild.fetchOwner()
    //서버 소유권 유저 닉네임
    const serverowner = owner.user.username;
    //서버 소유권 유저 테그
    const serverownertag = owner.user.discriminator;
    //서버 소유권 유저 아이디
    const serverownerid = owner.user.id;

    //서버 총 인원 카운트
    const allcount = interaction.guild.memberCount;
    //서버 봇 카운트
    const botcount = interaction.guild.members.cache.filter(m => m.user.bot).size;
    //서버 봇 제외 유저 카운트
    const usercount = interaction.guild.memberCount - botcount;


    //const allchannel = interaction.guild.channelsCount;
    //const allcategory = interaction.guild.channels.cache.filter((c) => c.type == "category").size
    //const textchannel = interaction.guild.channels.cache.filter((c) => c.type == "text").size;
    //const voicechannel = interaction.guild.channels.cache.filter((c) => c.type == "voice").size;

    /*const online = members.cache.filter((member) => member.presence?.status === 'online',).size
    const offline = members.cache.filter((member) =>member.presence?.status === 'offline' ||member.presence?.status === undefined,).size
    const dnd = members.cache.filter((member) => member.presence?.status === 'dnd',).size
    const afk = members.cache.filter((member) => member.presence?.status === 'idle',).size*/

    const embed = {
      color: 0x0099ff,
      title: servername + ' 서버 정보',
      description: servername + '서버의 정보를 알려드립니다.',
      thumbnail: {
        url: sicon,
      },
      fields: [
        {
          name: '소유자 이름',
          value: serverowner,
          inline: true,
        },
        {
          name: '소유자 태그',
          value: "#" + serverownertag,
          inline: true,
        },
        {
          name: '소유자 아이디',
          value: serverownerid,
          inline: true,
        },
        {
          name: '총 인원',
          value: allcount,
          inline: true,
        },
        {
          name: '유저',
          value: usercount,
          inline: true,
        },
        {
          name: '봇',
          value: botcount,
          inline: true,
        },
        /*{
          name: '카태고리',
          value: allcategory,
          inline: true,
        },
        {
          name: '채팅 채널',
          value: textchannel,
          inline: true,
        },
        {
          name: '음성 채널',
          value: voicechannel,
          inline: true,
        },*/
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '© 2022 Disturbed#7436. All Rights Reserved',
        icon_url: 'https://i.imgur.com/Uu4gEhV.png',
      },
    };

    await interaction.reply({ embeds: [embed] });
  },
};