const fs = require('fs');
const path = require('path');

// Module for handling event-related data
module.exports = {
    getUpcomingEvents: function() {
        // Read events data from events.json file
        const eventsFilePath = path.resolve(__dirname, '../data/events.json');
        const eventsData = fs.readFileSync(eventsFilePath, 'utf8');
        const events = JSON.parse(eventsData);
        return events;
    }
};