import Koa from 'koa';
import http from 'http';
import socket from 'socket.io';
import serve from 'koa-static'
import path from 'path'

const app = new Koa();
const server = http.createServer(app.callback())
const io = socket(server)

const staticPath = 'static/index.html'

app.use(serve(
  path.join(__dirname, '..', 'static')
))

app.use(async () => {
  console.log(staticPath);
});


io.on('connection', (socket) => {
  console.log(socket)
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

console.log('2')

server.listen(3030, '127.0.0.1')