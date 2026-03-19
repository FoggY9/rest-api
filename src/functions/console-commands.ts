import readline from "readline";

export default () => {
    console.log("console-commands is working");
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
    rl.on('line', (input:string) => {

        if (exitCommands.has(input)) {
            console.log('Exiting the application...');
            process.exit(0);
        }
        else if (input === 'status') {
            console.log('Application is running.');
        }
        else {
            console.log(`You entered: ${input}`);
        }});

}