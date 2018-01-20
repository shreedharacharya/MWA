const Rx = require('@reactivex/rxjs');
const htttp = require('http');
const url = require('url');
const{fork}=require('child_process');

const myObservable = new Rx.Subject();

myObservable.subscribe(readFile);

const hostname='localhost';
const port = 8085;
htttp.createServer((reqq,res)=>{
myObservable.next({reqq:reqq,res:res});
}).listen(port,hostname,()=>{
console.log(`Reactive Server is running at http://${hostname}:${port}`);
});

function readFile(ee) {
    let adr = ee.reqq.url;
    console.log(adr);
    let  qq = url.parse(adr, true);
    qq = qq.query;
  
    if(qq.url == undefined) return;
  
    const childProcess = fork('fileReader.js');
    childProcess.send(qq);
    childProcess.on('message', src => {
        ee.res.writeHead(200, { 'Content-Type': 'text/plain' });
        ee.res.end(src)
    })
  }

