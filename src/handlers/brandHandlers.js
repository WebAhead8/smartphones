// read from data.json 
const path = require("path")
const fs = require("fs")
const brandFilter = require("./brandFilter")

// url.searchparams aftr fetch, use on server also
//deployment
// data  filter
// startswith
// brand filter function
// remove duplicates 


const filePath = path.join(__dirname,"..", "data", "data.json")

function brandHandlers(req,res){
    console.log(filePath, "brandhandlers")
    // read data from ./data/data.json 
    // filePath declared to get the data.json destination
    // file => filename
    fs.readFile(filePath,'utf8',(err,file) => {
       if (err){
           console.log(err);
           res.writeHead(404,{"content-type":"text/html"})
           res.end("<h1>not found</h1>")
       }
       else {
           res.writeHead(200,{ "contetn-type": "application/json" });
           //console.log(JSON.parse(file).results[0].Brand, "brand")
           brandFilter(JSON.parse(file).results)
        res.end(JSON.parse(file));
       }
       
   });
   //console.log(item)
   

}

module.exports =brandHandlers;
