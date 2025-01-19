const { Client, GatewayIntentBits } = require('discord.js');

// Crée une instance du client Discord avec les intents nécessaires
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent  // Permet au bot de lire le contenu des messages
    ]
});

// Message indiquant que le bot est prêt
client.once('ready', () => {
    console.log('Le bot est prêt!');
});

// Écoute les nouveaux messages
client.on('messageCreate', (message) => {

    // Répondre si le message est !ping
    if (message.content === '!ping') {
        message.reply('Pong! 19ms.');
    }
});


// Connexion au bot avec ton token
client.login('YOUR-TOKEN');  // Remplace 'ton-token' par le token de ton bot
