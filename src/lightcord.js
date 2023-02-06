const Client = require('./client/Client');
const Intents = require('./constants/intents');
const Events = require('./constants/events');

// components
const msgcomponent = require('./components/message');

exports.Bot = Client;
exports.Intents = Intents
exports.Events = Events;
exports.MessageComponent = msgcomponent;