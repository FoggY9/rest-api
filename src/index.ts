// Importing the express server
import app from "./functions/express-server.js";

// Read Commands from the console
import readConsoleCommands from "./functions/console-commands.js";
readConsoleCommands();

// Save logs to a txt file
import { logger } from "./functions/logger.js";
setTimeout(() => {
    logger.emit("log", "This is a test log message after 5 seconds");
  }, 5000);
  setTimeout(() => {
    logger.emit("log", "This is a test log message after 10 seconds");
  }, 10000);

// Crash handler
import crashHandler from "./functions/crash-handler.js";
crashHandler(logger);
