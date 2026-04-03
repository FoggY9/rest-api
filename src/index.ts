// log number of cpu cores
import os from "os";
console.log(`Number of CPU cores: [${os.cpus().length}]`);

// Importing the express server
import "./functions/express-server.js";

// Read Commands from the console
import readConsoleCommands from "./functions/console-commands.js";
readConsoleCommands();

// Save logs to a txt file
import { logger } from "./functions/logger.js";

// Crash handler
import crashHandler from "./functions/crash-handler.js";
crashHandler(logger);
import "./functions/performance.js";
