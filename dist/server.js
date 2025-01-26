"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const ping_controller_1 = require("./controllers/ping.controller");
const swagger_1 = require("./swagger");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PING_LISTEN_PORT || 3000;
const pingController = new ping_controller_1.PingController();
const app = (0, express_1.default)();
(0, swagger_1.setupSwagger)(app);
app.all("*", (req, res) => {
    const server = http_1.default.createServer((req, res) => pingController.handlePing(req, res));
    server.emit("request", req, res);
});
const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
    });
};
exports.startServer = startServer;
