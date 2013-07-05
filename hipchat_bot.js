var request = require("request");
var sys = require("sys");
var util = require("util");
var xmpp = require("node-xmpp");

var jid = "28742_383441@chat.hipchat.com"
var password = "fen65hui"
var room_jid = "28742_glenn_-_experimental@conf.hipchat.com"
var room_nick = "Glass Bot"

var cl = new xmpp.Client({
    jid: jid + '/bot',
    password: password
});
    
cl.on('online',function() {
    util.log("We are online!");
    
    cl.send(new xmpp.Element('presence', {type: 'available'}).c('show').t('chat'));
    
    cl.send(new xmpp.Element('presence', {to: room_jid+'/'+room_nick}).
        c('x',{xmlns: 'http://jabber.org/protocol/muc'}));
    
});

cl.on('stanza',function(stanza){
    // always log error stanzas
    if (stanza.attrs.type == 'error'){
        util.log('[error] ' + stanza);
        return;
    }
    
    // ignore everything that isn't a room message
    if (!stanza.is('message') || !stanza.attrs.type == 'groupchat'){
        return;
    }
    
    // ignore messages we sent
    if (stanza.attrs.from == room_jid+'/'+room_nick){
        return;
    }
    
    var body = stanza.getChild('body');
    // message without a body is probably a change topic message
    if (!body) {
        return;
    }
    var message = body.getText();
    util.log(message);
    
    // Look for messages like "!weather 19081"
/*    if (message.indexOf("!weather") === 0) {
        var search = message.substring(9);
        util.log('Fetching weather for: "' + search + '"');
        
        //hit Yahoo API
        
        var query = 'select item from weather.forecast where location = "' + search + '"';
        var uri = 'http://query.yahooapis.com/v1/public/yql?format=json&q='+encodeURIComponent(query);
        request({'uri': uri}, function(error, response, body) {
            body = JSON.parse(body);
            var item = body.query.results.channel.item;
            if (!item.condition) {
                response = item.title;
            } else {
                response = item.title+': '+item.condition.temp+' degrees and '+item.condition.text;
            }
            
            //send message
            cl.send(new xmpp.Element('message', { to: room_jid+'/'+room_nick, type: 'groupchat' }).
                c('body').t(response)
            );
        });
    }
*/
    
    if (message.indexOf("!toglass") === 0) {
        var glassmsg = message.substring(9);
        util.log('Message to Glass: "' + glassmsg + '"');
        response = glassmsg;
        
        cl.send(new xmpp.Element('message', { to: room_jid+'/'+room_nick, type: 'groupchat'}).c('body').t(response));
    }
});