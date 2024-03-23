const EventEmitter = require('events');
const { handleMessage } = require('./utils');

const eventEmitter = new EventEmitter();

eventEmitter.on('message', (message) =>{
    handleMessage(message);
})
// Main logic for the chatbot
module.exports = {
    start: function() {
        console.log('Chatbot started');
        // Logic for initializing the bot, e.g., connecting to messaging platform
        // Event listener for incoming messages
        // When a message is received, call handleMessage
        eventEmitter.emit('message', 'Hello');
    }
};
