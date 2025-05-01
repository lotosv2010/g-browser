const EventEmitter = require('events');
class Network extends EventEmitter { }
const network = new Network();
module.exports = network;