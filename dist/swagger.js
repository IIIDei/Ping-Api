"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDocument = {
    openapi: "3.0.0",
    info: {
        title: "Node.js Ping API",
        version: "1.0.0",
        description: "API pour retourner les headers de la requête sur /ping",
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Serveur local",
        },
    ],
    paths: {
        "/ping": {
            get: {
                summary: "Récupérer les headers de la requête",
                responses: {
                    "200": {
                        description: "Headers retournés avec succès",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    additionalProperties: { type: "string" },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};
const setupSwagger = (app) => {
    app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
};
exports.setupSwagger = setupSwagger;
