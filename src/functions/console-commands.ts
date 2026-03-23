import readline from "readline";
import {performanceLogger as perfLogger} from "./performance.js";
export default () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
const exitCommands = new Set([
  'exit', 'quit', 'close', 'stop', 'end', 'shutdown',
  'terminate', 'abort', 'kill', 'die', 'destroy', 'halt',
  'poweroff', 'reboot', 'restart', 'logout', 'signout',
  'bye', 'goodbye', 'q', ':q',
]);
const perfomanceCommands = new Set([
    'perf', 'performance', 'perfomance', 'stats', 'statistics', "showperf", "showperformance"
])
    rl.on('line', (input:string) => {

        if (exitCommands.has(input.toLowerCase())) {
            console.log('Exiting the application...');
            process.exit(0);
        }
        else if (perfomanceCommands.has(input.toLowerCase())) {
            console.log('Performance statistics:');
            perfLogger.emit("perfLog");
            // Add performance statistics logic here
        }
        else if (input.toLowerCase() === 'status') {
            console.log('Application is running.');
        }
        else {
            console.log(`You entered: ${input}`);
        }});

}