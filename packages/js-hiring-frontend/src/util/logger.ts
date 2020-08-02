import settings from "../settings";
const environment: string = process.env.NODE_ENV;
const debug: boolean = settings[environment].debug;

class Logger {
    debug(...messages: any) {
        if (debug) {
            console.log(messages);
        }
    }
    warn(...messages: any) {
        console.warn(messages);
    }
    error(...messages: any) {
        console.error(messages);
    }
}

export const logger = new Logger();
