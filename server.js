//Copy and Write This in server.js

const dbd = require("dbd.js")

 

const bot = new dbd.Bot({

token: "", 

prefix: "!"

})

 

bot.onMessage()

 

bot.command({

name: "ping", 

code: `Pong! \`$ping\` ms` 

})
