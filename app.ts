import http from 'http';

http.createServer((req,res)=>{
    res.end('hello world');
})
.listen(5000,( )=>console.log("SERVE STARTED"))