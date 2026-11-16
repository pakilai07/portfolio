const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve('out');
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.webp':'image/webp','.txt':'text/plain'};
http.createServer((req,res)=>{
 let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400);return res.end('Bad request')}
 let file=path.resolve(root,'.'+pathname);if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);return res.end()}
 if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
 let status=200;if(!fs.existsSync(file)||!fs.statSync(file).isFile()){file=path.join(root,'404.html');status=404}
 res.writeHead(status,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});fs.createReadStream(file).pipe(res);
}).listen(Number(process.env.PORT||3000),'127.0.0.1',()=>console.log('Static preview: http://127.0.0.1:'+(process.env.PORT||3000)));
