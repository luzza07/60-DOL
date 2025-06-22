import { EventEmitter } from "node:events";

const url = "http://pseudologger.io/log";
class Logger extends EventEmitter{
  myLog(message) {
    //Send an http request
    console.log(message);

    //Raise an event
    this.emit("messageLogged", { id: 1, url: "url" });
  }
}

export default Logger;
