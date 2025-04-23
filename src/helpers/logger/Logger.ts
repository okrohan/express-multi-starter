export class Logger {
    public static info(...log: unknown[]) {
        console.log(`[INFO] [${Date.now()}]: `, ...log)
    }
}