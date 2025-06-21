const os =require ("node:os");


const freeMemory=os.freemem();
const totalMemory=os.totalmem();


console.log(`Total Memory:${totalMemory}`)
console.log(`Free Memory:${freeMemory}`)