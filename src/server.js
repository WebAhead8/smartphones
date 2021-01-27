const http  = require("http");
const router =require("./router");

const hostname = process.env.HOSTNAME || "localhost";
const port = process.env.port || 5000 ;

const server = http.createServer(router);

server.listen(port , hostname , ()=>{
    console.log(`server running at port http://${hostname}:${port}`)
});
