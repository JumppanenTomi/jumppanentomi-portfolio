export default function loggingEnabled(): boolean {
    return process.env.LOGGING === "true"
}