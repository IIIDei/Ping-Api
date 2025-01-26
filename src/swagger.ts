import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import { OpenAPIV3 } from "express-openapi-validator/dist/framework/types";

const swaggerDocument: OpenAPIV3.Document = {
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

export const setupSwagger = (app: Express): void => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
