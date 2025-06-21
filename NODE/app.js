import { EventEmitter } from "node:events";

const emitter = new EventEmitter();

//register a listener

emitter.on("messageLogged", (e) => {
  console.log("listener called...",e);
});

//Raise an event
emitter.emit("messageLogged", { id: 1, url: "url" });
