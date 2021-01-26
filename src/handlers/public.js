const fs = require("fs")
const path = require("path")

const types = {
    html:"text/html",
    css: "text/css",
    js: "application/javascript",
    jpg:"image/jpeg",
    png: "image/png",
    ico:"image/x-icon",
    json: "application/json"
}

function publicHandler(req, res) {
    filePath = path.join(__dirname, "..", req.url);
    const URL = req.url;
    const extention = URL.split(".")[1];
    const type = types[extention];
    fs.readFile(filePath, (err, file) => {//file = file name witch is in the path 
        if (err) {
            console.log(err);
            res.writeHead(404, { "contetn-type": "text/html" });
            res.end("<h1>Not Found</h1>");
        }
        else {
            res.writeHead(200, { "contetn-type": type });
            res.end(file);
        }
    });
}

module.exports = publicHandler;