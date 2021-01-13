const Youtube = require('youtube-node');
const config = require('./yt-config');

const youtube = new Youtube();
youtube.setKey(config.key);

youtube.search('Exercio em casa para biceps', 2, function(error, result) {
    if(!error) {
        console.log(JSON.stringify(result, null, 2));
    } else {
        console.log('Deu erro!');
    }
});