// Importando a biblioteca de API do Telegram. 
const TelegramBot = require('node-telegram-bot-api');
const dialogflow = require('./dialogflow');
const youtube = require('./youtube');

// Token recebido pelo @botfather.
const token = '1558287466:AAEEL0WNZ9GTmy362iYZRnyA0BWoaTbnMNU';

// Nova instância do Telegram.
const bot = new TelegramBot(token, { polling: true });

// Escuta mensagens enviadas pelos usuários.
bot.on('message', async (msg) => {

    // ID do chat do usuário.
    const chatId = msg.chat.id;

    // Resposta do dialogflow.
    const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);
   
    // Texto a partir da resposta do dialogflow.
    let responseText = dfResponse.text;

    // Verifica a intenção a partir da resposta do dialogflow.
    if (dfResponse.intent === 'Treino específico') {
        responseText = await youtube.searchVideoURL(responseText, dfResponse.fields.corpo.stringValue);
    }

    // Envio da mensagem para o usuário do Telegram.
    bot.sendMessage(chatId, responseText);
});