export default function loggingEnabled(): boolean {
    return process.env.ADDITIONAL_LOGGING === "true"
}