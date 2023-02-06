const Lightcord = require('./src/lightcord');

const bot = new Lightcord.Bot('TOKEN', Lightcord.Intents.Everything)

bot.on(Lightcord.Events.MessageCreate, (data) => {
    let msg = new Lightcord.MessageComponent(data);
    console.log(`${msg.author.username}: ${msg.content}`)
    // bot.sendMessage({content: msg.content}, msg.channelID);
})

bot.run()
