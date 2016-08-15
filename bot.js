console.log("Bot is waking up from sleep...")

var irc = require('irc');
var client = new irc.Client('irc.freenode.net', 'PrnHSBot', {
    channels: ['#room'],
});



client.addListener('message', function(from, to, message) {
    console.log('%s => %s: %s', from, to, message);

    if (to.match(/^[#&]/)) {
        // channel message
        if (message.match(/hello/i)) {
            client.say(to, 'Hello there ');
        }
        if (message.match(/dance/)) {
            setTimeout(function() { client.say(to, '\u0001ACTION dances: :D\\-<\u0001'); }, 1000);
            setTimeout(function() { client.say(to, '\u0001ACTION dances: :D|-<\u0001');  }, 2000);
            setTimeout(function() { client.say(to, '\u0001ACTION dances: :D/-<\u0001');  }, 3000);
            setTimeout(function() { client.say(to, '\u0001ACTION dances: :D|-<\u0001');  }, 4000);
        }
    }
    else {
        // private message
        console.log('private message');
    }
});


