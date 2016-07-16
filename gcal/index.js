#!/usr/bin/env node
const program = require('commander');

program
    .command('add <date> <description>')
    .option('-t, --time [time]', 'Time of the event.')
    .action(function (date, description, command) {
        console.log(`Add an event to Google Calendar on ${date} at ${command.time}. Description: ${description}`);
    });

program.parse(process.argv);
