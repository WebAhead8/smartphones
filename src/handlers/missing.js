
function missingHandler(req , res)
{
    res.writeHead(404 , {"content-type": "text/html"})
    res.end("<h1></h1>");
}
module.export = missingHandler;