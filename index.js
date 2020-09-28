const TelegramBot = require('node-telegram-bot-api');

const token = '1229062433:AAF2RFypzX1AW9LDRqX-J5EQH6ALzHk3ImE'; //token gerado pelo telegram Botfather//

const bot = new TelegramBot(token, { polling: true });

bot.on('message', function (msg) {
    const chatId = msg.chat.id;
    console.log(msg.text);
    bot.sendMessage(chatId, 'Obrigado por sua mensagem'); //mensagem simples devolvida a cada recebimento de mensagem//
});