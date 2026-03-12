require("dotenv").config();
const { Bot } = require("grammy");

const token = process.env.BOT_TOKEN;

if (!token) {
  console.error("Token missed!");
  process.exit(1);
}

const bot = new Bot(token);

// Commands handlings
bot.command("start", (ctx) => {
  ctx.reply("Привіт! Я працюю на grammY 🚀. Чим можу допомогти?");
});

bot.command("help", (ctx) => {
  ctx.reply(
    "Я розумію команди /start та /help. Також ти можеш просто написати мені щось.",
  );
});

// Messages handlings
bot.on("message", (ctx) => {
  const text = ctx.message.text;
  ctx.reply(`Ти сказав: ${text}`);
});

// STARTING THE BOT
bot.start({
  onStart: (botInfo) => {
    console.log(`Бот @${botInfo.username} успішно запущений!`);
  },
});
