const dialogflow = require('dialogflow');
const configs = require('./dio-bot-fit.json');

const sessionClient = new dialogflow.SessionsClient({
    projectId: configs.project_id,
    credentials: {
        private_key: configs.private_key,
        client_email: configs.client_email
    }
});

async function sendMessage(chatId, message) {
    const sessionPath = sessionClient.sessionPath(configs.project_id, chatId);
    
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message,
                languageCode: 'pt-br'
            }
        }
    }

    const response = await sessionClient.detectIntent(request);
    const result = ressponse[0].queryResult;
    
    // Retornando o objeto para ser utilizado no arquivo index.js.
    return { 
        text: result.fulfillmentText, 
        intent: result.intent.displayName, 
        fields: result.parameters.fields 
    };
};

module.exports.sendMessage = sendMessage;