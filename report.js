const newman = require('newman');
require('dotenv').config();


newman.run({
    //collection: require('./collection/dmoney.json'),
    collection:`https://api.postman.com/collections/32549945-94b15bc8-aa24-426d-a962-5467882a751e?access_key=${process.env.ACCESS_KEY}`,
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
