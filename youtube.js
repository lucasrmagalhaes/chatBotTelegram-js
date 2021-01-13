const Youtube = require('youtube-node');
const config = require('./yt-config');

const youtube = new Youtube();
youtube.setKey(config.key);

function searchVideoURL(message, queryText) {
    return new Promise((resolve, reject) => {
        youtube.search(`Exercio em casa para bíceps ${queryText}`, 2, function(error, result) {
            if(!error) {
                console.log(JSON.stringify(result, null, 2));
            } else {
                console.log('Deu erro!');
            }
        });
    });
}