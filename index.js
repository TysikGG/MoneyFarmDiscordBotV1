const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message',  message => {
    let messages = ["эх", "а лол что?", "чт",  "что", "а понимаю", "да", "нет", "ладно", ]; // Массив с сообщениями бота
    let randomNumber = Math.floor(Math.random() * messages.length); // рандом-генерация фразы из массива
    if(!message.channel.id == "693825169592156240") return;
    let random = Math.floor(Math.random() * 100)
        if (message.author.id == "943098563271983124") return;
        if(random <= 100){ // 100 - стандартный шанс на отправку сообщения     
            setTimeout(function(){   
            message.channel.send(messages[randomNumber]).then(message => message.delete({timeout:0})); 
        },1000 * 2)
    }})

bot.login("");



