import { IncomingMessage, ServerResponse } from "http";

export class PingController {
    handlePing(req: IncomingMessage, res: ServerResponse): void {
        if (req.method === "GET" && req.url === "/ping") {
            const headers = req.headers;
            const headersJson = JSON.stringify(headers);
            const contentLength = Buffer.byteLength(headersJson, "utf-8");

            res.writeHead(200, {
                "Content-Type": "application/json",
                "Content-Length": contentLength,
                Connection: "keep-alive",
            });
            res.end(headersJson);
        } else {

            res.writeHead(404, {
                "Content-Length": "0",
                Connection: "close",
            });
            res.end();
        }
    }
}
