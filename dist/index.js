"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var http_1 = __importDefault(require("http"));
var socket_io_1 = __importDefault(require("socket.io"));
var app = new koa_1.default();
var server = http_1.default.createServer(app.callback());
var io = socket_io_1.default(server);
// app.use('/', async (res) => {
//   console.log('link')
// })
io.on('connection', function (socket) {
    console.log(socket);
    console.log('a user connected');
});
console.log('12');
server.listen(3030, '127.0.0.1');
//# sourceMappingURL=index.js.map