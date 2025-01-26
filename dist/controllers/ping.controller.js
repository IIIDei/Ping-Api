"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingController = void 0;
class PingController {
    handlePing(req, res) {
        if (req.method === 'GET' && req.url === '/ping') {
            const headers = req.headers;
            res.setHeader('X-Client-Headers', JSON.stringify(headers));
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(headers));
        }
        else {
            res.writeHead(404, { 'Content-Length': '0' });
            res.end();
        }
    }
}
exports.PingController = PingController;
