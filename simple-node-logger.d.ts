declare type LogLevel = "trace" | "debug" | "info" | "warn" | "error" | "fatal" | "all";

declare interface Logger {
	setLevel(level: LogLevel);
	getLevel(): LogLevel;
	log(level: LogLevel, ...messages: any[]);
	info(...messages: any[]);
	trace(...messages: any[]);
	debug(...messages: any[]);
	warn(...messages: any[]);
	error(...messages: any[]);
	fatal(...messages: any[]);
	setAppenders(appenders: Appender[]): void;
	addAppender(appender: Appender): void;
	getAppenders(): Appender;
	isDebug(): boolean;
	isInfo(): boolean;
	
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

declare interface Appender {
}

declare interface SimpleLogger {
	createLogger(option: LoggerOption): Logger;
	createLogger(category: string, level: LogLevel): Logger;
	createSimpleLogger(): Logger;
	createSimpleLogger(logFile: string): Logger;
	createSimpleLogger(option: LoggerOption): Logger;
	createSimpleFileLogger(logFile: string): Logger;
	createSimpleFileLogger(option: LoggerOption): Logger;
	createRollingFileLogger(option: LoggerOption): Logger;
	createLogManager(option: LoggerOption): Manager;
	setAllLoggerLevels(level: LogLevel): void;
	startRefreshThread(): void;
	readConfig((err: any) => any): void;
	getLoggers(): Logger[];
	getAppenders(): Appender[];
	addAppender(appender: Appender): Appender;
}

declare var _Static: SimpleLogger;

export = _Static;
