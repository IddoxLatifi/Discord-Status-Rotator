const { Client, GatewayIntentBits, EmbedBuilder, SlashCommandBuilder, PermissionsBitField, Permissions, ActivityType, Events } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on(Events.ClientReady, (x) => {
    console.log(`${x.user.tag} is ready!`);

    const activities = [
        {
            name: 'YouTube Live',
            type: ActivityType.Streaming,
            url: 'Your Link' //put your YT-Link here!
        },
        {
            name: 'discord.gg/latifimods', //type what the Bot should listening
            type: ActivityType.Listening,
        },
        
        {
            name: 'LatifiMods', //type what the Bot should listening
            type: ActivityType.Listening,
        },
        {
            name: 'discord.gg/latifimods',  //type what the bot should play!
            type: ActivityType.Playing
        },
        {
            name: 'YouTube Live',
            type: ActivityType.Streaming,
            url: 'Your Link' //put your YT-Link here!
        },
    
    ];


    client.user.setStatus('dnd'); // set status to dnd/online

    
    setInterval(() => {
        const random = Math.floor(Math.random() * activities.length);
        client.user.setActivity(activities[random]);
    }, 5000);  //set the rotationspeed in milliseconds
});

client.login('YOUR TOKEN HERE!');  //Put your Token here!