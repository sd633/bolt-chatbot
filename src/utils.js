const { getUpcomingEvents } = require('./events');

// Utility functions
function handleMessage(message) {
    console.log('Received message:', message);
    // Function to handle incoming messages from users
    // Parse the message and determine the user's intent
    // For simplicity, let's assume the intent is to get events
    const response = getEventsResponse(); // Corrected to call getEventsResponse directly
    console.log('Bot response:', response);
    // Send the response back to the user (not implemented in this example)
}

function getEventsResponse() {
    // Function to generate response for fetching upcoming events
    const events = getUpcomingEvents();
    if (events.length > 0) {
        let response = 'Upcoming events:\n';
        events.forEach(event => {
            response += `\nName: ${event.name}\nDate: ${event.date}\nLocation: ${event.location}\nDescription: ${event.description}\n`;
        });
        return response;
    } else {
        return 'No upcoming events found.';
    }
}

module.exports = { handleMessage };
