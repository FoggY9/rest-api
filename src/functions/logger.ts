import { createWriteStream, mkdirSync, existsSync } from 'node:fs';
import path from "path"
import eventEmitter from 'events';

const logDir = path.join(process.cwd(), "logs")
if (!existsSync(logDir)) {
  mkdirSync(logDir, { recursive: true });
}

const safeTime = new Date()
  .toISOString()
  .replace(/[:.]/g, "-")
  .replace("T", "_")
  .replace("Z", "")

  
const normalFilePath = path.join(logDir, `logs-${safeTime}.log`)
const logStream = createWriteStream(normalFilePath, { flags: 'a' });

const errorFilePath = path.join(logDir, `error-logs-${safeTime}.log`)
const errorLogStream = createWriteStream(errorFilePath, { flags: 'a' });



export const logger = new eventEmitter();

logger.on('log', (message) => {
  const logMessage = `[${new Date().toISOString()}] - ${message}\n`;
  logStream.write(logMessage);
});
logger.on('error', (err) => {
  const errorMessage = `[${new Date().toISOString()}] - Error: ${err.message}\n`;
  errorLogStream.write(errorMessage);

});