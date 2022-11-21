const http = require("http");
const server = http.createServer((req,res)=>{
res.end("akshay kumar")
})
server.listen(4000,"localhost",()=>{
    console.log("akshay is rinning")
})