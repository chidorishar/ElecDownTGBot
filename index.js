// 1. Завантаження змінних оточення
require("dotenv").config();
const { Bot } = require("grammy");

// 2. Отримання токена
const token = process.env.BOT_TOKEN;

if (!token) {
  console.error("ПОМИЛКА: Токен не знайдено в .env");
  process.exit(1);
}

// 3. Створення екземпляра бота
const bot = new Bot(token);

// 4. Обробка команд
bot.command("start", (ctx) => {
  ctx.reply("Привіт! Я працюю на grammY 🚀. Чим можу допомогти?");
});

bot.command("help", (ctx) => {
  ctx.reply(
    "Я розумію команди /start та /help. Також ти можеш просто написати мені щось.",
  );
});

// 5. Обробка звичайних повідомлень
bot.on("message", (ctx) => {
  const text = ctx.message.text;
  ctx.reply(`Ти сказав: ${text}`);
});

// 6. Запуск бота (Long Polling)
bot.start({
  onStart: (botInfo) => {
    console.log(`Бот @${botInfo.username} успішно запущений!`);
  },
});
