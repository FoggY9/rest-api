import { createWriteStream } from "node:fs";
import path from "path";
import { EventEmitter } from "node:events";

export const performanceLogger = new EventEmitter();

const perfStream = createWriteStream(path.join(process.cwd(), "performance.log"),{ flags: "a" });

let intervalTime = 3000;
let startTime = Date.now();

function getInterval() {
  const elapsed = Date.now() - startTime;

  if (elapsed > 1200000) return 300000; // 20m -> 5m
  if (elapsed > 600000) return 120000;  // 10m -> 2m
  if (elapsed > 300000) return 60000;   // 5m -> 1m
  if (elapsed > 120000) return 30000;   // 2m -> 30s
  if (elapsed > 60000) return 20000;    // 1m -> 20s
  if (elapsed > 20000) return 10000;    // 20s -> 10s
  return 3000;
}

function autoLog() {
  const perfMessage = `[autolog][${new Date().toISOString()}] cpu: ${process.cpuUsage().user / 1000}%, memory: ${process.memoryUsage().heapUsed / 1024 / 1024} mb\n`;

  perfStream.write(perfMessage);

  intervalTime = getInterval();
  setTimeout(autoLog, intervalTime);
}

autoLog();

performanceLogger.on("perfLog", () => {
  const interval = setInterval(() => {
    const perfMessage = `[manualPerfLog] cpu: ${
      process.cpuUsage().user / 1000
    }%, memory: ${process.memoryUsage().heapUsed / 1024 / 1024} mb\n`;

    console.log(perfMessage);
    perfStream.write(perfMessage);
  }, 2000);

  setTimeout(() => clearInterval(interval), 11000);
});