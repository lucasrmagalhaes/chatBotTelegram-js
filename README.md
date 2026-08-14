<h2 align="center">Construindo um ChatbotFit no Telegram com JavaScript e NodeJS</h2>

<h5 align="center">Configuração</h5>

<p align="left">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As credenciais não são versionadas. Antes de rodar o bot, dentro de <code>dio-chatbot-fit/</code>:
</p>

<ol>
    <li>Copie <code>yt-config.example.json</code> para <code>yt-config.json</code> e preencha o campo <code>key</code> com a sua chave da YouTube Data API v3.</li>
    <li>Copie <code>dio-bot-fit.example.json</code> para <code>dio-bot-fit.json</code> e preencha com o JSON da sua conta de serviço do Google Cloud (Dialogflow).</li>
    <li>Defina a variável de ambiente <code>TELEGRAM_BOT_TOKEN</code> com o token gerado pelo @botfather.</li>
</ol>

<pre>set TELEGRAM_BOT_TOKEN=seu_token   # Windows (cmd)
export TELEGRAM_BOT_TOKEN=seu_token  # Linux/macOS
node index.js</pre>

<hr />

<p align="left">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Iniciando o projeto:
</p>

<pre>npm init</pre>

<hr />

<p align="left">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.npmjs.com/package/node-telegram-bot-api">node-telegram-bot-api</a>
</P>

<pre>npm i node-telegram-bot-api --save</pre>

<hr />

<p align="left">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cadastrar um bot para gerar o token: <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://telegram.me/botfather">@botfather</a>
</p>

<hr />

<h5 align="center">Teste de Comunicação do Telegram com o Código</h5>

<p align="left">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Iniciar conversa com o bot: <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/mybots 
    <br /> <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acessar o bot e rodar o comando: <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/start
</p>

<hr />

<p align="left">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://dialogflow.cloud.google.com/#/newAgent">Dialogflow - New Agent</a>
</p>

<hr />

<p align="left">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://console.cloud.google.com/">Google Cloud</a> <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contas de Serviço
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criar a conta com a chave JSON
</p>

<hr />

<p align="left">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.npmjs.com/package/dialogflow">dialogflow</a> <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;npm i install dialogflow --save
</p>

<hr />

<p align="left">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.npmjs.com/package/youtube-node">youtube-node</a> <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;npm install youtube-node --save
</p>

<hr />

<p align="left">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://developers.google.com/youtube/v3/quickstart/nodejs">Node.js Quickstart</a>
</p>

<hr />

<p align="left">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://console.developers.google.com/flows/enableapi?apiid=youtube&pli=1">Registre seu aplicativo no serviço YouTube Data API v3 no Console de API do Google.</a>
</p>

<hr />
