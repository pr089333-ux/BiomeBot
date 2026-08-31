const { Client, GatewayIntentBits } = require('discord.js');
const BOT_TOKEN = process.env.BOT_TOKEN;

const bot = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const BIOMES = {
  cyber: '@everyone 🚨 CYBER ⚡ +35% Basic Luck — JOIN NOW!',
  eden: '@everyone 🌿 EDEN ✨ +35% Light Luck!',
  inferno: '@everyone 🔥 INFERNO 🔴 +35% Fire Luck!',
  monsoon: '@everyone 💧 MONSOON 🌊 +35% Water Luck!',
  overgrown: '@everyone 🌱 OVERGROWN 🌍 +35% Earth Luck!',
  rapture: '@everyone 👿 RAPTURE ⬜ +35% Demon Luck!',
  night: '@everyone 🌙 NIGHT 🌑 +35% Night Luck!',
  normal: '@everyone ☀️ NORMAL — No luck bonus'
};

bot.once('ready', () => console.log('✅ ONLINE — Logged as:', bot.user?.tag));
bot.on('messageCreate', async msg => {
  if(msg.author.bot) return;
  const text = msg.content.toLowerCase();
  for(const [word, announce] of Object.entries(BIOMES)) {
    if(text.includes(word)) {
      console.log('🔔 DETECTED:', word);
      await msg.channel.send(announce);
      break;
    }
  }
});
bot.login(BOT_TOKEN);
