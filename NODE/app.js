// Load the built-in 'http' module
const http = require('http');

//load the logger
var logger=require('./logger')
logger.log('message')

//navigating paths]
const path=require("node:path")
const pathObj=path.parse(__filename)

console.log(pathObj)




