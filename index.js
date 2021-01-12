// Importando a biblioteca de API do Telegram. 
const TelegramBot = require('node-telegram-bot-api');

// Token recebido pelo @botfather.
const token = '1558287466:AAEEL0WNZ9GTmy362iYZRnyA0BWoaTbnMNU';

// Nova instância do Telegram.
const bot = new TelegramBot(token, { polling: true });