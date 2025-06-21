import {EventEmitter} from "node:events"

const emitter =new EventEmitter();

//register a listener

emitter.on("messageLogged",()=>{
    console.log("listener called...");
    
})

//Raise an event
emitter.emit("messageLogged")


