const path = require("path");
const fs = require("fs");



function homeHandler(req , res)
{
    const filePath = path.join(__dirname , ".." , "public","index.html");

    fs.readFile(filePath , (err , file)=>{
        if(err){
            console.log(err);
            res.writeHead(404 , {"content-type": "text/html"})
            res.end("<h1>page not found</h1>")
        }

        else{
            res.writeHead(200,{"content-type": "text/html"})
            res.end(file)
        }
    });
}
 module.exports = homeHandler;

// router ==> / ==> homenahdler ==> homepage (index.html)
// homehandler ==> readfile index.html 
// path  ==> __dirname (current possition) => return back (..) ==> req.url
// error status 404 
// succses 200 res.end(file)
