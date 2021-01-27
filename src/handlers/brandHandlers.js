// read from data.json 
const path = require("path")
const fs = require("fs")


const filePath = path.join(__dirname,"..", "data", "data.json")

function brandHandlers(res,req){
    console.log(filePath, "brandhandlers")
    // read data from ./data/data.json 
    // filePath declared to get the data.json destination

   


}

module.exports =brandHandlers;
