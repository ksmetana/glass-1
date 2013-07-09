var wobot = require('wobot');

var room_jid = ""
var room_nick = ""

var bot = new wobot.Bot({
<<<<<<< HEAD
    jid: "28742_383441@chat.hipchat.com",
    password: "wabisabi"
=======
    jid: "",
    password: ""
>>>>>>> d6c4025cd715c35240d35a0593000f08ecf4c30f
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
