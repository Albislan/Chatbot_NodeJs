const TelegramBot = require('node-telegram-bot-api');
const dialogflow = require('./dialogflow');
const youtube = require('./youtube')

const token = '1229062433:AAF2RFypzX1AW9LDRqX-J5EQH6ALzHk3ImE'; //token gerado pelo telegram Botfather//

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async function (msg) {
    const chatId = msg.chat.id;
    console.log(msg.text);

    const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);
   
    let responseText = dfResponse.text;

    if (dfResponse.intent === 'programação com nodejs e javascript') {
        responseText =  await youtube.searchVideoURL(responseText, dfResponse.fields.node.stringValue);
    }

    bot.sendMessage(chatId, responseText); //mensagem simples devolvida a cada recebimento de mensagem//
});