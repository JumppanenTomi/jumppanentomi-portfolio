export default function EmailTemplate(recipientName: string, message: string): string {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    font-family: Calibri, sans-serif
                }
                .email-container {
                    max-width: 600px;
                    margin: auto;
                    color: #fff;
                }
                .email-header {
                    background: #000000;
                    padding: 20px;
                    text-align: center;
                }
                .email-inner-container {
                    padding: 20px;
                    background: #000000;
                }
                .email-footer {
                    background: #000000;
                    padding: 10px;
                    text-align: center;
                }
                h1 {
                    color: #5c6ed0;
                }
                h1, h2, h3, h4 {
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <div class="email-header">
                    <h1>Tomi Jumppanen</h1>
                </div>
                <div class="email-inner-container">
                    <h2>Hello, ${recipientName}</h2>
                        <p>
                            ${message}
                        </p>
                </div>
                    <div class="email-footer">
                        <p>2024 - tomijumppanen.com</p>
                    </div>
            </div>
        </body>
    </html>`;
}