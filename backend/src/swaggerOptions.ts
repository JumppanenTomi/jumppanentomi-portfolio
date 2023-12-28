export const swaggerOptions = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Tomi's blog backend",
            version: "0.1.0",
            description:
                "",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Tomi Jumppanen",
                email: "tomi.jumppanen@hotmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ['./src/Controllers/*.ts', './src/Routes/*.ts']
};