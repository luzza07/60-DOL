import { EventEmitter } from "node:events";
import Logger from "./logger.js";
const logger = new Logger();
//Register a listener
logger.on("messageLogged", (e) => {
  console.log("listener called...", e);
});


logger.myLog("message");
