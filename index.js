// Importando a biblioteca de API do Telegram. 
const TelegramBot = require('node-telegram-bot-api');

const dialogflow = require('./dialogflow');

// Token recebido pelo @botfather.
const token = '1558287466:AAEEL0WNZ9GTmy362iYZRnyA0BWoaTbnMNU';

// Nova instância do Telegram.
const bot = new TelegramBot(token, { polling: true });

// Escuta mensagens enviadas pelos usuários.
bot.on('message', async function (msg) {
        
    // ID do chat do usuário.
    const chatId = msg.chat.id;
    console.log(msg.text);
    
    const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);
   
    if (dfResponse.intent === 'Treino especifico') {
        
    }

    // Envio da mensagem para o usuário do Telegram.
    bot.sendMessage(chatId, dfResponse.text);
});