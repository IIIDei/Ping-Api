import express from "express";
import http from "http";
import { PingController } from "./controllers/ping.controller";
import { setupSwagger } from "./swagger";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PING_LISTEN_PORT || 3000;
const pingController = new PingController();

const app = express();

setupSwagger(app);

app.all("*", (req, res) => {
    const server = http.createServer((req, res) =>
        pingController.handlePing(req, res)
    );
    server.emit("request", req, res);
});

export const startServer = (): void => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
    });
};
