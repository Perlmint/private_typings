declare type LogLevel = "trace" | "debug" | "info" | "warn" | "error" | "fatal";

declare interface Logger {
	setLevel(level: LogLevel);
	info(...messages: any[]);
	trace(...messages: any[]);
	debug(...messages: any[]);
	warn(...messages: any[]);
	error(...messages: any[]);
	fatal(...messages: any[]);
}

declare interface Manager {
	createConsoleAppender();
	createRollingFileAppender();
	createLogger(name: string): Logger;
}

declare interface LoggerOption {
	logDirectory?: string;
	logFilePath: string;
	timestampFormat?: string;
	dateFormat?: string;
	readLoggerConfig?: () => LoggerOption;
	level?: LogLevel;
}

declare interface LoggerStatic {
	createSimpleLogger(): Logger;
	createSimpleLogger(logFile: string): Logger;
	createSimpleLogger(option: LoggerOption): Logger;
	createSimpleFileLogger(logFile: string): Logger;
	createSimpleFileLogger(option: LoggerOption): Logger;
	createRollingFileLogger(option: LoggerOption): Logger;
	createLogManager(option: LoggerOption): Manager;
}

declare var _Static: LoggerStatic;

export = _Static;
