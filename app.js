var tmi = require('tmi.js');

//configuration and connect the bot to my twitch channel
var options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "exhaustedPigeonBot",
        password: "oauth:au1a33rnbnyr5t2b1s1olk832gwzcl"
    },
    channels: ["vicky20yo"]
};

var client = new tmi.client(options);

// Connect the client to the server..
client.connect();

client.on("connected", function (address, port) {
    //console.log("Address: " + address + "Port: " + port);
    client.action("vicky20yo", "Hello I am Exhausted Pigeon Bot.");
});

client.on("chat", function (channel, userstate, message, self) {
    client.action(channel, userstate['display-name'] + " Welcome!")
});