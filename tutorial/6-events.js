var events = require('events'); //built in module events with node.js

var eventEmitter = new events.EventEmitter();

// cutom event
eventEmitter.on('customEvent', function() {
  console.log("Event is fired");
});

setTimeout(function() {
  eventEmitter.emit('customEvent'); //eventEmitter.emit() used to execute events
}, 2000);
