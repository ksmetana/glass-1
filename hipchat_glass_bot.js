var wobot = require('wobot');

var room_jid = "28742_glenn_-_experimental@conf.hipchat.com"
var room_nick = "Glass Bot"

var bot = new wobot.Bot({
    jid: "28742_383441@chat.hipchat.com",
    password: "wabisabi"
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