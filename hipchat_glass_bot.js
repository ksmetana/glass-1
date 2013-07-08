var wobot = require('wobot');

var room_jid = ""
var room_nick = ""

var bot = new wobot.Bot({
    jid: "",
    password: ""
    });
    
bot.connect();

bot.onConnect(function() {
    console.log('Connected');
    this.join(room_jid);
    
    this.getRoster(function(err, items, stanza) {
        if (err) {
            console.log('Error getting roster: ' + err);
            return;
        }
        
        items.forEach(function(item) {
            console.log('Roster Contact: ' + item.name);
        });
    });
});

bot.onMessage(function(channel, from, message) {
    bot.message(channel,message);
    console.log('> ' + from + '@' + channel + 'said: ' + message);
});
